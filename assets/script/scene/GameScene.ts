import MountData from "../mount/MountData";
import MountModel from "../mount/MountModel";
import SKHotUpdate from "../engine/util/SKHotUpdate";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Node)
    mountNode:cc.Node=null;
    
    action:string="stand";
    mountId:number=9111;
    roleId:number=1001;
    dir:number=1;
    mountIndex:number=0;
    group:MountData[];
    turn:number=0;

    clickRoleSelect(event:cc.Event.EventTouch,data:number){
        if(this.roleId==data){
            return;
        }
        this.roleId=data;
        this.updateMountList();
        this.replay();
    }

    clickMountSelect(event:cc.Event.EventTouch,data:number){
        if(this.mountIndex==data){
            return;
        }
        this.mountIndex=data;
        if(!this.group){
            return;
        }
        this.mountId=this.group[this.mountIndex].mountId;
        this.replay();
    }

    clickActionSelect(event:cc.EventTarget,data:string){
        if(this.action==data){
            return;
        }
        this.action=data;
        this.replay();
    }

    clickTurn(event:cc.EventTarget,data:number){
        if(this.turn==data){
            return;
        }
        this.turn=data;
        if(this.turn==0){
            if(this.roleId==1011 || this.roleId==1031){
                this.roleId=1001;
            }
            else if(this.roleId==1012 || this.roleId==1032){
                this.roleId=1002;
            }
            else if(this.roleId==2013 || this.roleId==2033){
                this.roleId=2003;
            }
            else if(this.roleId==2014 || this.roleId==2034){
                this.roleId=2004;
            }
            else if(this.roleId==3015 || this.roleId==3035){
                this.roleId=3005;
            }
            else if(this.roleId==3016 || this.roleId==3036){
                this.roleId=3006;
            }
            else if(this.roleId==4017 || this.roleId==4037){
                this.roleId=4007;
            }
            else if(this.roleId==4018 || this.roleId==4038){
                this.roleId=4008;
            }
        }
        else if(this.turn==1){
            if(this.roleId==1001 || this.roleId==1031){
                this.roleId=1011;
            }
            else if(this.roleId==1002 || this.roleId==1032){
                this.roleId=1012;
            }
            else if(this.roleId==2003 || this.roleId==2033){
                this.roleId=2013;
            }
            else if(this.roleId==2004 || this.roleId==2034){
                this.roleId=2014;
            }
            else if(this.roleId==3005 || this.roleId==3035){
                this.roleId=3015;
            }
            else if(this.roleId==3006 || this.roleId==3036){
                this.roleId=3016;
            }
            else if(this.roleId==4007 || this.roleId==4037){
                this.roleId=4017;
            }
            else if(this.roleId==4008 || this.roleId==4038){
                this.roleId=4018;
            }
        }
        else if(this.turn==3){
            if(this.roleId==1001 || this.roleId==1011){
                this.roleId=1031;
            }
            else if(this.roleId==1002 || this.roleId==1012){
                this.roleId=1032;
            }
            else if(this.roleId==2003 || this.roleId==2013){
                this.roleId=2033;
            }
            else if(this.roleId==2004 || this.roleId==2014){
                this.roleId=2034;
            }
            else if(this.roleId==3005 || this.roleId==3015){
                this.roleId=3035;
            }
            else if(this.roleId==3006 || this.roleId==3016){
                this.roleId=3036;
            }
            else if(this.roleId==4007 || this.roleId==4017){
                this.roleId=4037;
            }
            else if(this.roleId==4008 || this.roleId==4018){
                this.roleId=4038;
            }
        }
        this.replay();
    }

    // 点击角色换方向
    private clickRole(){
        if(this.dir==1){
            this.dir=3;
            MountModel.playAni(this.mountNode,this.roleId,this.dir,this.action,this.mountId);
        }else{
            this.dir=1;
            MountModel.playAni(this.mountNode,this.roleId,this.dir,this.action,this.mountId);
        }
    }

    private updateMountList(){
        var list=MountModel.getMountGroup(this.roleId);
        if(!list){
            return;
        }
        if(this.group==list){
            return;
        }
        this.group=list;
        var node=this.node.getChildByName("mountGroup");
        for(var i:number=0;i<this.group.length;i++){
            var mountNode=node.getChildByName("mount_"+(i+1));
            var labelNode:cc.Node=mountNode.getChildByName("Background").getChildByName("Label");
            var label=labelNode.getComponent(cc.Label);
            label.string=this.group[i].name;
        }
        this.mountId=this.group[this.mountIndex].mountId;
    }

    private replay(){
        MountModel.playAni(this.mountNode,this.roleId,this.dir,this.action,this.mountId);
    }

    onLoad () {
        var labelNode=this.node.getChildByName("versionLabel");
        if(labelNode){
            var label=labelNode.getComponent(cc.Label);
            if(label){
                label.string=SKHotUpdate.shared.version;
            }
        }
        this.updateMountList();
        this.mountNode.on(cc.Node.EventType.TOUCH_END,this.clickRole.bind(this));
        this.replay();
    }
}
