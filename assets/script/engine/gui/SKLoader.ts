const {ccclass, property} = cc._decorator;

@ccclass
export default class SKLoader extends cc.Component {

    @property(cc.Boolean)
    autoLoad:boolean=true;

    @property(cc.String)
    dir:string="";

    pb:cc.ProgressBar;
    errorBlock:Function;
    successBlock:Function;

    onLoad () {
        if(this.dir.length<1){
            return;
        }
        this.pb=this.node.getComponent(cc.ProgressBar);
        this.pb.progress=0;
        if(!this.autoLoad){
            this.startLoad();
        }
    }

    startLoad(){
        cc.loader.loadResDir(this.dir,cc.SpriteAtlas,(completedCount: number, totalCount: number, item: any)=>{
            var progress:number=completedCount/totalCount;
            this.pb.progress=progress;
        },(error: Error, resource: any[], urls: string[])=>{
            if(error){
                if(this.errorBlock){
                    this.errorBlock(error);
                }
            }else{
                if(this.successBlock){
                    this.successBlock();
                }
            }
        });
    }
}
