export default class SKAnimation{

    static playAni(node:cc.Node,url:string){
        cc.log("play ani",node,url);
        if(!node){
            cc.log("必须有结点才能播放动画",url);
            return;
        }
        if(!url || url.length<1){
            var sprite=node.getComponent(cc.Sprite);
            sprite.spriteFrame=null;
            var ani=node.getComponent(cc.Animation);
            ani.stop();
            return;
        }
        var atlas=cc.loader.getRes(url,cc.SpriteAtlas);
        if(atlas){
            this.playOfAtlas(node,atlas,url);
            cc.log("从加载图集缓存中播放动画",url);
            return;
        }
        cc.loader.loadRes(url,cc.SpriteAtlas,async (err,result:cc.SpriteAtlas)=>{
            if(err){
                cc.log("加载动画资源错误",url,err.message);
                return;
            }
            this.playOfAtlas(node,result,url);
        });
    }
    // 通过纹理图集播放动画
    static playOfAtlas(node:cc.Node,atlas:cc.SpriteAtlas,url:string){
        var frames=atlas.getSpriteFrames();
        let clip = cc.AnimationClip.createWithSpriteFrames(frames, 10);
        clip.name = url;
        clip.wrapMode = cc.WrapMode.Loop;
        var sprite=node.getComponent(cc.Sprite);
        sprite.spriteFrame=frames[0];
        sprite.sizeMode=cc.Sprite.SizeMode.RAW;
        sprite.trim=false;
        var ani=node.getComponent(cc.Animation);
        var index=ani.getClips().indexOf(clip);
        if(index==-1){
            ani.addClip(clip);
        }
        ani.play(clip.name);
        cc.log("播放动画",url);
    }
}