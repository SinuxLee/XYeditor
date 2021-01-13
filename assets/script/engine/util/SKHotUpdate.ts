export default class SKHotUpdate{

    public static changeBlock:Function;
    public static progressBlock:Function;
    public static endBlock:Function;

    static shared:SKHotUpdate=new SKHotUpdate();

    manifest:cc.Asset;
    storagePath:string;
    assetsManager:jsb.AssetsManager;
    updating:boolean=false;
    canRetry:boolean=false;
    version:string="";

    static checkUpdate(){
        this.shared.checkHot();
    }

    private end(){
        if(SKHotUpdate.endBlock){
            SKHotUpdate.endBlock();
        }
    }

    private checkHot(){
        cc.log("检查更新...",cc.sys.isNative);
        if(!cc.sys.isNative){
            cc.log("不支持h5热更新");
            this.end();
            return;
        }
        cc.loader.loadRes("project",(err,result)=>{
            if(err){
                cc.log("加载本地project.manifest失败");
                this.end();
                return;
            }
            this.manifest=result;
            this.checkUpdate();
        })
    }

    checkUpdate(){
        if(this.updating){
            cc.log("正在检查更新...");
            return;
        }
        if(!this.assetsManager){
            this.storagePath=((jsb.fileUtils ?jsb.fileUtils.getWritablePath():'/')+'game-remote-asset');
            if(cc.sys.os == cc.sys.OS_IOS){
                this.storagePath=this.storagePath+"Documents/";
            }
            cc.log("检查本地缓存",this.storagePath);
            this.assetsManager=new jsb.AssetsManager("",this.storagePath,this.checkVersion.bind(this));
            this.assetsManager.setVerifyCallback((path:string,asset:any)=>{
                var compressed=asset.compressed;
                var expectedMD5=asset.md5;
                var relativePath=asset.path;
                var size=asset.size;
                cc.log("版本验证",compressed,expectedMD5,relativePath,size);
                if(compressed){
                    return true;
                }else{
                    return true;
                }
            });
            if(cc.sys.os == cc.sys.OS_ANDROID){
                this.assetsManager.setMaxConcurrentTask(2);
            }
        }
        // 加载本地manifest
        if(this.assetsManager.getState()==jsb.AssetsManager.State.UNINITED){
            var url=this.manifest.nativeUrl;
            cc.log("###",url);
            if(cc.loader.md5Pipe){
                cc.log("### md5");
                url=cc.loader.md5Pipe.transfromURL(url);
            }
            this.assetsManager.loadLocalManifest(url);
        }
        if(!this.assetsManager.getState() || !this.assetsManager.getLocalManifest().isLoaded()){
            cc.log("加载本地manifest失败");
            return;
        }
        this.assetsManager.setEventCallback(this.checkEvent.bind(this));
        this.assetsManager.checkUpdate();
        this.updating=true;
    }
    // 检查事件
    private checkEvent(event:jsb.EventAssetsManager){
        var code=event.getEventCode();
        var hasUpdate:boolean=false;
        cc.log("检查事件:"+code);
        switch(code){
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("未找到本地清单文件，已跳过热更新.");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("无法下载清单文件,已经跳热更新。");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log("已经是更新的版本");
                if(SKHotUpdate.endBlock){
                    SKHotUpdate.endBlock();
                }
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                hasUpdate=true;
                break;
            default:
                cc.log("其他继续:",code);
                return;
        }
        this.assetsManager.setEventCallback(null);
        this.updating=false;
        if(hasUpdate){
            var info="检查到新版本:V"+this.version;
            cc.log(info);
            if(SKHotUpdate.changeBlock){
                SKHotUpdate.changeBlock(info);
            }
            this.startUpdate();
        }
    }
    // 更新事件
    private updateEvent(event:jsb.EventAssetsManager){
        cc.log("更新事件:",event.getEventCode());
        var needRestart=false;
        var failed=false;
        var code=event.getEventCode();
        switch(code){
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                failed=true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                var percent=event.getPercent();
                var filePercent=event.getPercentByFile();
                var byteInfo=event.getDownloadedFiles()+"/"+event.getTotalBytes();
                var fileInfo=event.getDownloadedFiles()+"/"+event.getTotalFiles();
                var msg=event.getMessage();
                cc.log(percent,filePercent,byteInfo,fileInfo,msg);
                if(SKHotUpdate.progressBlock){
                    if(isNaN(percent)){
                        percent=0;
                    }
                    SKHotUpdate.progressBlock(percent);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                failed=true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                failed=true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                needRestart=true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.updating=false;
                this.canRetry=true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                var msg=event.getMessage();
                cc.log("解压错误",msg);
                break;
        }
        if(failed){
            cc.log("更新失败",code);
            this.assetsManager.setEventCallback(null);
            this.updating=false;
            this.end();
        }
        if(needRestart){
            cc.log("更新完成,重启游戏!");
            this.assetsManager.setEventCallback(null);
            // @ts-ignore
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this.assetsManager.getLocalManifest().getSearchPaths();
            Array.prototype.unshift(searchPaths, newPaths);
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    }

    // 检查版本
    private checkVersion(versionA:string,versionB:string):number{
        this.version=versionB;
        cc.log("版本检查:",versionA,this.version);
        var vA=versionA.split('.');
        var vB=versionB.split('.');
        for(var i=0;i<vA.length;++i){
            var a=parseInt(vA[i]);
            var b=parseInt(vB[i] || '0');
            if(a==b){
                continue;
            }else{
                return a-b;
            }
        }
        if(vB.length>vA.length){
            return -1;
        }
        return 0;
    }
    // 开始更新
    private startUpdate(){
        if(!this.assetsManager || this.updating){
            cc.log("更新错误");
            if(SKHotUpdate.endBlock){
                SKHotUpdate.endBlock();
            }
            return;
        }
        this.assetsManager.setEventCallback(this.updateEvent.bind(this));
        // 加载本地manifest
        if(this.assetsManager.getState()==jsb.AssetsManager.State.UNINITED){
            var url=this.manifest.nativeUrl;
            if(cc.loader.md5Pipe){
                url=cc.loader.md5Pipe.transfromURL(url);
            }
            this.assetsManager.loadLocalManifest(url);
        }
        this.assetsManager.update();
        this.updating=true;
        cc.log("开始更新...");
    }
}