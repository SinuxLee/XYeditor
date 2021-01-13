/**
 * 游戏工具类
 * @author BrightLi
 * @since 2020/5/3
 */
import SKLoading from "../gui/SKLoading";
import SKLocalUtil from "./SKLocalUtil";

export default class SKGameUtil
{
    static bgmClip:cc.AudioClip=null;
    static musicVolume:number=0.3;
    static soundVolume:number=0.7;
    static loading:SKLoading;

    private static isMusicMuted:boolean;
    private static isSoundMuted:boolean;

    // 音乐是否禁音
    static get musicMuted():boolean{
        if(this.isMusicMuted==null){
            this.isMusicMuted=SKLocalUtil.boolForKey("music_muted");
        }
        return this.isMusicMuted;
    }
    // 设置音乐是否禁音
    static set musicMuted(value:boolean){
        if(this.isMusicMuted==value){
            return;
        }
        this.isMusicMuted=value;
        SKLocalUtil.setBool(this.isMusicMuted,"music_muted");
        if(this.isMusicMuted){
            cc.audioEngine.pauseMusic();
        }else{
            this.playMusic(this.bgmClip);
        }
    }

    static get soundMuted():boolean{
        if(this.isSoundMuted == null){
            this.isSoundMuted=SKLocalUtil.boolForKey("sound_muted");
        }
        return this.isSoundMuted;
    }

    static set soundMuted(value:boolean){
        if(this.isSoundMuted==value){
            return;
        }
        this.isSoundMuted=value;
        SKLocalUtil.setBool(this.isSoundMuted,"sound_muted");
    }

    static playMusic(clip:cc.AudioClip){
        if(this.bgmClip != clip){
            this.bgmClip=clip;
        }
        if(!this.bgmClip || this.musicMuted){
            return;
        }
        cc.audioEngine.setMusicVolume(this.musicVolume);
        cc.audioEngine.playMusic(this.bgmClip,true);
        cc.audioEngine.resumeMusic();
    }

    static playEffect(clip:cc.AudioClip,loop:boolean=false){
        if(!clip || this.soundMuted){
            return;
        }
        cc.audioEngine.setEffectsVolume(this.soundVolume);
        cc.audioEngine.playEffect(clip,false);
    }

    static onProgress(completedCount:number,totalCount:number,item:Object){
        let progress:number=completedCount/totalCount;
        if(this.loading){
            if(progress<1){
                this.loading.progress=progress;
            }else{
                this.loading.node.removeFromParent();
                this.loading=null;
            }
        }
    }

    static loadScene(sceneName:string,node?:cc.Node,loadingPrefab?:cc.Prefab){
        if(node){
            if(loadingPrefab){
                let temp=cc.instantiate(loadingPrefab);
                this.loading=temp.getComponent(SKLoading);
                node.addChild(temp);
            }
        }
        cc.director.preloadScene(sceneName,this.onProgress.bind(this),()=>{
            cc.director.loadScene(sceneName);
        })
    }
}