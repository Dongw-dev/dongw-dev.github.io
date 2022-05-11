const BULLET_IMG_SRC = 'src/assets/img/qibo.png';
const BULLET_WIDTH = 15;
const BULLET_HEIGHT = 30;

class qibo extends Sprite {
    constructor () {
        super({imgSrc: BULLET_IMG_SRC, width: BULLET_WIDTH, height: BULLET_HEIGHT});
        this.speed = 20;
        this.name = 'qibo';
    }
    init (options) {
        this.x = options.x;
        this.y = options.y;
        this.isImage = true;
        this.face = options.face;
        console.log('options===',options)
    }
    update () {
        // console.log(this)
        switch(this.face) {
            case "down":
                this.y += this.speed;
                break;
            case "up":
                this.y -= this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "right":
                this.x += this.speed;
                break;
        }
        
    }
}