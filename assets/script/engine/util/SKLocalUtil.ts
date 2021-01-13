const {ccclass, property} = cc._decorator;

@ccclass
export default class SKLocalUtil{

    static setBool(value:boolean,key:String){
        cc.sys.localStorage.setItem(key,value ?"true":"false");
    }

    static setString(value:string,key:string){
        cc.sys.localStorage.setItem(key,value);
    }

    static boolForKey(key:string,valid:boolean=false):boolean{
        let result=cc.sys.localStorage.getItem(key);
        if(!result){
            return valid;
        }
        if(result=="true"){
            return true;
        }else if(result=="false"){
            return false;
        }
        return valid;
    }

    static stringForKey(key:string,valid:string=""):string{
        let result:string=cc.sys.localStorage.getItem(key);
        if(!result){
            return valid;
        }
        return result;
    }

    static clear(){
        cc.sys.localStorage.clear();
    }
}
