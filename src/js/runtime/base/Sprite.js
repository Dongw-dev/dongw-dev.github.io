/**
 * 精灵类
 * 
 */
class Sprite {
    constructor(options = {}){
        this.image = new Image();
        // const imgLoader = new ImgLoader();
        this.image.src = options.imgSrc;
        // imgLoader.preload(options.imgSrc, function(){
            
        // })
        
        this.sx = options.sx;
        this.sy = options.sy;


        this.x = options.x || 50;
        this.y = options.y || 50;

        this.width = options.width;
        this.height = options.height;
        
        this.isImage = false;

        if(options.animation) this.animation = new options.animation;

    }
    /**
     * 绘制
     * @param { ctx } ctx
     */
    show(ctx) {
        // void ctx.drawImage(image, dx, dy);
        // void ctx.drawImage(image, dx, dy, dWidth, dHeight);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(
            this.image,
            this.sx,
            this.sy,
            this.width,
            this.height,
            this.x,
            this.y,
            80,
            80
        )
    }
    /**
     * 碰撞检测
     * @param { Sprite } sp: sprite实例
     */
     collisionDetection(sp) {
        const spX = ( sp.x + sp.width ) / 2;
        const spY = ( sp.height + sp.height ) / 2;
        
        console.log(spX, ',', spY)
    }
}