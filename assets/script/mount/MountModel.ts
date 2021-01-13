import MountData from "./MountData";
import SKAnimation from "../engine/gui/SKAnimation";

// 坐骑模型
export default class MountModel{

    static shared:MountModel=new MountModel();
    mountList:{[key:number]:MountData};
    group1:MountData[];
    group2:MountData[];
    group3:MountData[];
    group4:MountData[];

    constructor(){
        this.mountList={};
        var data=new MountData();
        data.mountId=9111;
        data.name="白马";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9121;
        data.name="大象";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9131;
        data.name="熊猫"
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9141;
        data.name="黄金猊";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9211;
        data.name="葫芦";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9222;
        data.name="莲花";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9231;
        data.name="仙车";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9241;
        data.name="风凰";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9311;
        data.name="黑熊";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9321;
        data.name="巨魔狮";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9331;
        data.name="奔雷";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9341;
        data.name="大风鸟";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9411;
        data.name="婴鲤";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9421;
        data.name="鬼猫";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9431;
        data.name="幽灵马";
        this.mountList[data.mountId]=data;
        data=new MountData();
        data.mountId=9441;
        data.name="梦魇";
        this.mountList[data.mountId]=data;

        this.group1=[];
        this.group1.push(this.mountList[9111]);
        this.group1.push(this.mountList[9121]);
        this.group1.push(this.mountList[9131]);
        this.group1.push(this.mountList[9141]);

        this.group2=[];
        this.group2.push(this.mountList[9211]);
        this.group2.push(this.mountList[9222]);
        this.group2.push(this.mountList[9231]);
        this.group2.push(this.mountList[9241]);

        this.group3=[];
        this.group3.push(this.mountList[9311]);
        this.group3.push(this.mountList[9321]);
        this.group3.push(this.mountList[9331]);
        this.group3.push(this.mountList[9341]);

        this.group4=[];
        this.group4.push(this.mountList[9411]);
        this.group4.push(this.mountList[9421]);
        this.group4.push(this.mountList[9431]);
        this.group4.push(this.mountList[9441]);
    }

    static getMountGroup(roleId:number){
        var race=Math.floor(roleId/1000);
        // 人
        if(race==1){
            return this.shared.group1;
        }
        // 仙
        else if(race==2){
            return this.shared.group2;
        }
        // 魔
        else if(race==3){
            return this.shared.group3;
        }
        // 鬼
        else if(race==4){
            return this.shared.group4;
        }
    }

    static playAni(node:cc.Node,roleId:number,dir:number,action:string,mountId:number){
        if(!node){
            return;
        }
        var data=this.shared.mountList[mountId];
        if(!data){
            return;
        }
        data.roleId=roleId;
        node.y=data.offsetY;
        var url=data.getClipURL(dir,action,"b");
        var behindNode=node.getChildByName("ride_behind");
        if(behindNode){
            behindNode.position=data.getOffset(dir,action,"b");
            SKAnimation.playAni(behindNode,url);
        }
        url=data.getClipURL(dir,action,"b2");
        var behindNode2=node.getChildByName("ride_behind2");
        if(behindNode2){
            behindNode2.position=data.getOffset(dir,action,"b2");
            SKAnimation.playAni(behindNode2,url);
        }
        url=data.getClipURL(dir,action,"b3");
        var behindNode3=node.getChildByName("ride_behind3");
        if(behindNode3){
            behindNode3.position=data.getOffset(dir,action,"b3");
            SKAnimation.playAni(behindNode3,url);  
        }
        url=data.getRoleURL(dir,action);
        var roleNode=node.getChildByName("role");
        if(roleNode){
            roleNode.position=data.getRoleOffset(dir,action);
            SKAnimation.playAni(roleNode,url);
        }
        url=data.getClipURL(dir,action,"f");
        var frontNode=node.getChildByName("ride_front");
        if(frontNode){
            frontNode.position=data.getOffset(dir,action,"f");
            SKAnimation.playAni(frontNode,url);
        }
        url=data.getClipURL(dir,action,"f1");
        var frontNode1=node.getChildByName("ride_front1");
        if(frontNode1){
            frontNode1.position=data.getOffset(dir,action,"f1");
            SKAnimation.playAni(frontNode1,url);
        }
    }
}