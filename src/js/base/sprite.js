class Sprite {
    constructor(options = {}){
        this.image = new Image();
        this.image.src = options.imgSrc;
        
        this.sx = options.sx;
        this.sy = options.sy;


        this.x = options.x || 50;
        this.y = options.y || 50;

        this.width = options.width;
        this.height = options.height;
        console.log(options);
        this.isImage = false;
    }
    /**
     * 绘制
     * @param { ctx } ctx
     */
    showUp(ctx) {
        if(this.name) {
            
        }
        // void ctx.drawImage(image, dx, dy);
        // void ctx.drawImage(image, dx, dy, dWidth, dHeight);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if(!this.isImage) {
            ctx.drawImage(
                this.image,
                this.sx,
                this.sy,
                this.width,
                this.height,
                this.x,
                this.y,
                this.width,
                this.height
            )
        } else {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
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