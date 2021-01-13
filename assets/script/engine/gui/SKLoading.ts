/**
 * 环形进度条
 * @author BrightLi
 * @since 2020/5/3
 */
const {ccclass, property} = cc._decorator;

@ccclass
export default class SKLoading extends cc.Component {

    @property(cc.Sprite)
    ring:cc.Sprite=null;

    public set progress(value:number){
        this.ring.fillRange=value;
    }

    onLoad () {
        this.ring.fillRange=0;
    }

}
