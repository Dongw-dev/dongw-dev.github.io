const BULLET_UP_IMG_SRC = 'src/assets/img/player/qibo_up.png';
const BULLET_DOWN_IMG_SRC = 'src/assets/img/player/qibo_down.png';
const BULLET_LEFT_IMG_SRC = 'src/assets/img/player/qibo_left.png';
const BULLET_RIGHT_IMG_SRC = 'src/assets/img/player/qibo_right.png';

const BULLET_WIDTH = 15;
const BULLET_HEIGHT = 30;

class qibo extends Sprite {
    constructor () {
        super({imgSrc: BULLET_DOWN_IMG_SRC, width: BULLET_WIDTH, height: BULLET_HEIGHT});
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
                this.image.src = BULLET_DOWN_IMG_SRC;
                this.y += this.speed;
                break;
            case "up":
                this.image.src = BULLET_UP_IMG_SRC;
                this.y -= this.speed;
                break;
            case "left":
                this.image.src = BULLET_LEFT_IMG_SRC;
                this.x -= this.speed;
                break;
            case "right":
                this.image.src = BULLET_RIGHT_IMG_SRC;
                this.x += this.speed;
                break;
        }
        
    }
}