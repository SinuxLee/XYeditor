export default class MountData{
    mountId:number;
    name:string;
    roleId:number;
    score:number=2000;
    offsetY:number=30;

    // 是否为扩展部分
    isExtend(part:string):boolean{
        if(part=="b1" || part=="b2" || part=="b3" || part=="f1"){
            return true;
        }
        return false;
    }

    getClipURL(dir:number,action:string,part:string):string{
        // 白马
        if(this.mountId==9111){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 大象
        else if(this.mountId==9121){
            if(this.isExtend(part)){
                return "";
            }
            if(dir==3){
                if(part=="f"){
                    return "";
                }
            }
        }
        // 熊猫
        else if(this.mountId==9131){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 黄金猊
        else if(this.mountId==9141){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 葫芦
        else if(this.mountId==9211){
            if(action=="run"){
                action="stand";
            }
            if(dir==1){
                if(part=="f" || part=="f1"){
                    return "";
                }
            }
            else if(dir==3){
                if(part=="b2" || part=="b3"){
                    return "";
                }
            }
        }
        // 莲花
        else if(this.mountId==9222){
            if(this.isExtend(part)){
                return "";
            }
            if(action=="run"){
                action="stand";
            }
        }
        // 仙车
        else if(this.mountId==9231){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 风凰
        else if(this.mountId==9241){
            if(this.isExtend(part)){
                return "";
            }
            if(action=="run"){
                action="stand";
            }
        }
        // 黑熊
        else if(this.mountId==9311){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 巨魔狮
        else if(this.mountId==9321){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 奔雷
        else if(this.mountId==9331){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 大风鸟
        else if(this.mountId==9341){
            if(this.isExtend(part)){
                return "";
            }
            if(action=="run"){
                action="stand";
            }
        }
        // 婴鲤
        else if(this.mountId==9411){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 鬼猫
        else if(this.mountId==9421){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 幽灵马
        else if(this.mountId==9431){
            if(this.isExtend(part)){
                return "";
            }
        }
        // 梦魇
        else if(this.mountId==9441){
            if(this.isExtend(part)){
                return "";
            }
        }
        return "/mount/"+this.mountId+"/"+action+"_"+dir+"_"+part;
    }

    getRoleURL(dir:number,action:string):string{
        if(this.roleId==2003 || this.roleId==2004){
            action="stand";
        }
        return "/mount/"+this.roleId+"/"+action+"_"+dir;
    }

    getRoleOffset(dir:number,action:string):cc.Vec3{
        // 白马
        if(this.mountId==9111){
            if(dir==1){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(0,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(0,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(10,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(10,60,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(0,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(0,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(10,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(10,60,0);
                    }
                }
            }
            else if(dir==3){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(0,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(0,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-10,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-10,60,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(0,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(0,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-10,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-10,60,0);
                    }
                }
            }
        }
        // 大象
        if(this.mountId==9121){
            if(dir==1){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-20,185,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-20,130,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-20,185,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-20,115,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-20,185,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-20,130,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-20,185,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-20,115,0);
                    }
                }
            }
            else if(dir==3){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(20,165,0);
                    }else if(this.roleId==1031){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(20,155,0);
                    }else if(this.roleId==1032){
                        return cc.v3(20,85,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(20,165,0);
                    }else if(this.roleId==1031){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(20,155,0);
                    }else if(this.roleId==1032){
                        return cc.v3(20,85,0);
                    }
                }
            }
        }
        // 熊猫
        else if(this.mountId==9131){
            if(dir==1){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-10,120,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-10,50,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-10,120,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-10,50,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-10,110,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-10,50,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-10,110,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-10,40,0);
                    }
                }
            }
            else if(dir==3){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(10,110,0);
                    }else if(this.roleId==1031){
                        return cc.v3(10,50,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(10,110,0);
                    }else if(this.roleId==1032){
                        return cc.v3(10,40,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(10,100,0);
                    }else if(this.roleId==1031){
                        return cc.v3(10,40,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(10,100,0);
                    }else if(this.roleId==1032){
                        return cc.v3(0,30,0);
                    }
                }
            }
        }
        // 黄金猊
        else if(this.mountId==9141){
            if(dir==1){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-20,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-20,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-10,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-10,60,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(-20,130,0);
                    }else if(this.roleId==1031){
                        return cc.v3(-20,70,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(-20,130,0);
                    }else if(this.roleId==1032){
                        return cc.v3(-20,60,0);
                    }
                }
            }
            else if(dir==3){
                if(action=="stand"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1031){
                        return cc.v3(20,50,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1032){
                        return cc.v3(20,40,0);
                    }
                }else if(action=="run"){
                    if(this.roleId==1001 || this.roleId==1011){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1031){
                        return cc.v3(20,50,0);
                    }else if(this.roleId==1002 || this.roleId==1012){
                        return cc.v3(20,110,0);
                    }else if(this.roleId==1032){
                        return cc.v3(20,40,0);
                    }
                }
            }
        }
        // 葫芦
        else if(this.mountId==9211){
            if(dir==1){
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(60,70,0);
                }else if(this.roleId==2033){
                    return cc.v3(60,20,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(60,70,0);
                }else if(this.roleId==2034){
                    return cc.v3(60,90,0);
                }
            }else{
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(-70,130,0);
                }else if(this.roleId==2033){
                    return cc.v3(-70,80,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(-70,130,0);
                }else if(this.roleId==2034){
                    return cc.v3(-70,150,0);
                }
            }
        }
        // 莲花
        else if(this.mountId==9222){
            if(dir==1){
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(-5,40,0);
                }else if(this.roleId==2033){
                    return cc.v3(-5,-10,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(-5,40,0);
                }else if(this.roleId==2034){
                    return cc.v3(-5,60,0);
                }
            }else{
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(5,40,0);
                }else if(this.roleId==2033){
                    return cc.v3(5,-10,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(5,40,0);
                }else if(this.roleId==2034){
                    return cc.v3(5,60,0);
                }
            }
        }
        // 仙车
        else if(this.mountId==9231){
            if(dir==1){
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(-30,70,0);
                }else if(this.roleId==2033){
                    return cc.v3(-30,20,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(-30,70,0);
                }else if(this.roleId==2034){
                    return cc.v3(-30,90,0);
                }
            }else{
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(40,60,0);
                }else if(this.roleId==2033){
                    return cc.v3(40,10,0);
                }else if(this.roleId==2004 || this.roleId==2014 || this.roleId==2014){
                    return cc.v3(40,60,0);
                }else if(this.roleId==2034){
                    return cc.v3(40,80,0);
                }
            }
        }
        // 凤凰
        else if(this.mountId==9241){
            if(dir==1){
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(0,70,0);
                }else if(this.roleId==2033){
                    return cc.v3(0,20,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(0,70,0);
                }else if(this.roleId==2034){
                    return cc.v3(0,90,0);
                }
            }else{
                if(this.roleId==2003 || this.roleId==2013){
                    return cc.v3(-10,70,0);
                }else if(this.roleId==2033){
                    return cc.v3(-10,20,0);
                }else if(this.roleId==2004 || this.roleId==2014){
                    return cc.v3(-10,70,0);
                }else if(this.roleId==2034){
                    return cc.v3(-10,90,0);
                }
            }
        }
        // 黑熊
        else if(this.mountId==9311){
            if(dir==1){
                if(this.roleId==3005){
                    return cc.v3(-30,175,0);
                }else if(this.roleId==3015){
                    return cc.v3(-10,135,0);
                }else if(this.roleId==3035){
                    return cc.v3(-10,65,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(0,125,0);
                }else if(this.roleId==3036){
                    return cc.v3(0,65,0);
                }
            }else{
                if(this.roleId==3005){
                    return cc.v3(0,160,0);
                }else if(this.roleId==3015){
                    return cc.v3(10,120,0);
                }else if(this.roleId==3035){
                    return cc.v3(10,50,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(0,110,0);
                }else if(this.roleId==3036){
                    return cc.v3(0,50,0);
                }
            }
        }
        // 巨魔狮
        else if(this.mountId==9321){
            if(dir==1){
                if(this.roleId==3005){
                    return cc.v3(-20,160,0);
                }else if(this.roleId==3015){
                    return cc.v3(0,120,0);
                }else if(this.roleId==3035){
                    return cc.v3(0,50,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(0,110,0);
                }else if(this.roleId==3036){
                    return cc.v3(0,50,0);
                }
            }else{
                if(this.roleId==3005){
                    return cc.v3(-25,145,0);
                }else if(this.roleId==3015){
                    return cc.v3(-5,105,0);
                }else if(this.roleId==3035){
                    return cc.v3(-5,35,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(-25,100,0);
                }else if(this.roleId==3036){
                    return cc.v3(-25,50,0);
                }
            }
        }
        // 奔雷
        else if(this.mountId==9331){
            if(dir==1){
                if(this.roleId==3005){
                    return cc.v3(-35,130,0);
                }else if(this.roleId==3015){
                    return cc.v3(-15,90,0);
                }else if(this.roleId==3035){
                    return cc.v3(-15,20,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(0,80,0);
                }else if(this.roleId==3036){
                    return cc.v3(0,20,0);
                }
            }else{
                if(this.roleId==3005){
                    return cc.v3(-25,125,0);
                }else if(this.roleId==3015){
                    return cc.v3(-5,85,0);
                }else if(this.roleId==3035){
                    return cc.v3(-5,15,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(-25,75,0);
                }else if(this.roleId==3036){
                    return cc.v3(-25,15,0);
                }
            }
        }
        // 大风鸟
        else if(this.mountId==9341){
            if(dir==1){
                if(this.roleId==3005){
                    return cc.v3(-20,140,0);
                }else if(this.roleId==3015){
                    return cc.v3(0,100,0);
                }else if(this.roleId==3035){
                    return cc.v3(0,30,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(0,90,0);
                }else if(this.roleId==3036){
                    return cc.v3(0,30,0);
                }
            }else{
                if(this.roleId==3005){
                    return cc.v3(-25,145,0);
                }else if(this.roleId==3015){
                    return cc.v3(-5,105,0);
                }else if(this.roleId==3035){
                    return cc.v3(-5,35,0);
                }else if(this.roleId==3006 || this.roleId==3016){
                    return cc.v3(-25,95,0);
                }else if(this.roleId==3036){
                    return cc.v3(-25,30,0);
                }
            }
        }
        // 婴鲤
        else if(this.mountId==9411){
            if(dir==1){
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(10,80,0);
                }else if(this.roleId==4037){
                    return cc.v3(10,20,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(10,80,0);
                }else if(this.roleId==4038){
                    return cc.v3(10,20,0);
                }
            }else{
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(-10,100,0);
                }else if(this.roleId==4037){
                    return cc.v3(-10,40,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(-10,100,0);
                }else if(this.roleId==4038){
                    return cc.v3(-10,40,0);
                }
            }
        }
        // 鬼猫
        else if(this.mountId==9421){
            if(dir==1){
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(0,90,0);
                }else if(this.roleId==4037){
                    return cc.v3(0,30,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(0,90,0);
                }else if(this.roleId==4038){
                    return cc.v3(0,30,0);
                }
            }else{
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(0,100,0);
                }else if(this.roleId==4037){
                    return cc.v3(0,40,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(0,100,0);
                }else if(this.roleId==4038){
                    return cc.v3(0,40,0);
                }
            }
        }
        // 幽灵马
        else if(this.mountId==9431){
            if(dir==1){
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(-10,150,0);
                }else if(this.roleId==4037){
                    return cc.v3(-10,90,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(-10,150,0);
                }else if(this.roleId==4038){
                    return cc.v3(-10,90,0);
                }
            }else{
                if(this.roleId==4007 || this.roleId==4017){
                    return cc.v3(10,135,0);
                }else if(this.roleId==4037){
                    return cc.v3(10,75,0);
                }else if(this.roleId==4008 || this.roleId==4018){
                    return cc.v3(10,135,0);
                }else if(this.roleId==4038){
                    return cc.v3(10,75,0);
                }
            }
        }
        // 梦魇
        else if(this.mountId==9441){
            if(dir==1){
                if(this.roleId==4007 || this.roleId==4017){
                    if(action=="stand"){
                        return cc.v3(-20,90,0);
                    }else{
                        return cc.v3(-20,80,0);
                    }
                }else if(this.roleId==4037){
                    if(action=="stand"){
                        return cc.v3(-20,30,0);
                    }else{
                        return cc.v3(-20,20,0);
                    }
                }else if(this.roleId==4008 || this.roleId==4018){
                    if(action=="stand"){
                        return cc.v3(-20,90,0);
                    }else{
                        return cc.v3(-20,80,0);
                    }
                }else if(this.roleId==4038){
                    if(action=="stand"){
                        return cc.v3(-20,30,0);
                    }else{
                        return cc.v3(-20,20,0);
                    }
                }
            }else{
                if(this.roleId==4007 || this.roleId==4017){
                    if(action=="stand"){
                        return cc.v3(0,70,0);
                    }else{
                        return cc.v3(0,80,0);
                    }
                }else if(this.roleId==4037){
                    if(action=="stand"){
                        return cc.v3(0,10,0);
                    }else{
                        return cc.v3(0,20,0);
                    }
                }else if(this.roleId==4008 || this.roleId==4018){
                    if(action=="stand"){
                        return cc.v3(0,70,0);
                    }else{
                        return cc.v3(0,80,0);
                    }
                }else if(this.roleId==4038){
                    if(action=="stand"){
                        return cc.v3(0,10,0);
                    }else{
                        return cc.v3(0,20,0);
                    }
                }
            }
        }
        return cc.v3(0,135,0);
    }

    getOffset(dir:number,action:string,part:string):cc.Vec3{
        if(this.mountId==9121){
            if(part=="f"){
                return cc.v3(0,-20,0);
            }
        }
        if(this.mountId==9141){
            if(dir==1){
                if(action=="run"){
                    return cc.v3(10,0,0);
                }
            }else if(dir==3){
                if(action=="run"){
                    return cc.v3(-15,5,0);
                }
            }
        }
        if(this.mountId==9321){
            if(action=="run"){
                if(dir==1){
                    return cc.v3(-10,40,0);
                }else{
                    if(part=="b"){
                        return cc.v3(-40,50,0);
                    }else{
                        return cc.v3(-50,50,0);
                    }
                }
            }
        }
        else if(this.mountId==9421){
            if(action=="run"){
                if(dir==1){
                    return cc.v3(20,-15,0);
                }else{
                    return cc.v3(-20,15,0);
                }
            }
        }
        return cc.v3(0,0,0);
    }
}