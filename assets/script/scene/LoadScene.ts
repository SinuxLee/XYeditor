import SKLoader from "../engine/gui/SKLoader";
import SKGameUtil from "../engine/util/SKGameUtil";
import SKHotUpdate from "../engine/util/SKHotUpdate";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadScene extends cc.Component {

    @property(cc.ProgressBar)
    pbNode:cc.ProgressBar=null;

    @property(cc.Label)
    infoLabel:cc.Label=null;

    loader:SKLoader;

    onLoad () {
        SKHotUpdate.changeBlock=(info:string)=>{
            this.infoLabel.string=info;
        };
        SKHotUpdate.progressBlock=(percent:number)=>{
            this.infoLabel.string=(Math.min(1,percent)*100).toFixed(2)+"%";
            this.pbNode.progress=percent;
        }
        SKHotUpdate.endBlock=()=>{
            this.next();
        }
        SKHotUpdate.checkUpdate();
    }

    next(){
        this.loader=this.pbNode.getComponent(SKLoader);
        this.loader.successBlock=()=>{
            this.infoLabel.string="加载完成";
            SKGameUtil.loadScene("GameScene");
        }
        this.loader.errorBlock=(error:Error)=>{
            this.infoLabel.string="加载失败:"+error.message;
        }
    }
}
