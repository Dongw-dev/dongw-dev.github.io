const PLAYER_IMG_SRC = 'src/assets/img/player.png'; // 97*128 single: 32*32
const PLAYER_WIDTH = 32;
const PLAYER_HEIGHT = 32;


class Player extends Sprite {
    constructor() {
        super({ imgSrc: PLAYER_IMG_SRC, sx: 0, sy: 0, width: PLAYER_WIDTH, height: PLAYER_HEIGHT });
        this.speed = 256;
        this.keysDown = {}; 
        this.walkIndex = 0;
        this.touch = false; // 人物是否被控制
        this.count = 0;
        this.time = null;
        this.faceTo = 'down'; // 人物朝向
        this.initEvent();
    }
    initEvent() {
        console.log(canvas)
        // 键盘输入事件只发生在当前拥有焦点的HTML元素上，如果没有元素拥有焦点，那么事件将会上移至windows和document对象
        canvas.addEventListener("keydown", (e) => {
            this.keysDown[e.key] = true;
            this.touch = true;
            this.time = new Date().getTime();
            // console.log('before====',this.time);
            console.log('key====',e.key);
        })
        canvas.addEventListener("keyup", (e) => {
            delete this.keysDown[e.key];
            this.touch = false;
            this.time = new Date().getTime();
            console.log('after====',this.time);
        })
    }
    update(modifier = 60/1000) {
        if(!this.touch) return;
        console.log(this);
        // this.reset(this.faceTo);
        if ("ArrowUp" in this.keysDown) { // Player holding up
            this.sy = 32*3;
            this.faceTo = 'up';
            this.y -= this.speed * modifier;
        }
        if ("ArrowDown" in this.keysDown) { // Player holding down
            this.sy = 0;
            this.faceTo = 'down';
            this.y += this.speed * modifier;
        }
        if ("ArrowLeft" in this.keysDown) { // Player holding left
            this.sy = 32;
            this.faceTo = 'left';
            this.x -= this.speed * modifier;
        }
        if ("ArrowRight" in this.keysDown) { // Player holding right
            this.sy = 32*2;
            this.faceTo = 'right';
            this.x += this.speed * modifier;
        }
        if("s" in this.keysDown) {
            this.atk()
        }
        this.walk();
        
    }

    walk() {
        this.walkIndex++;
        this.sx += 32;
        if(this.walkIndex > 2) {
            this.walkIndex = 1;
            this.sx = 32;
        }
    }
    
    atk() {
        let qb = new qibo();
        console.log('[]', this);
        qb.init({
            x: this.x + PLAYER_WIDTH / 2 - BULLET_WIDTH / 2,
            y: this.y + PLAYER_HEIGHT / 2,
            face: this.faceTo
        });
        databus.qibos.push(qb);
        console.log('123==', databus);
    }
}