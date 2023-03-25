/**
 * 帧动画
 */
const FPS = 60;
class Animator {
    constructor () {
        // 是否在播放
        this.isPlaying = false;

        // 是否循环
        this.isLoop = false;

        // 动画间隔
        this.interval = 1000/FPS;
        
        // 当前帧
        this.currentFrame = -1;

        // 动画集合
        this.animations = [];

        // 帧定时器
        this.timer = null;

        // 
        // this.ctx = s;
    }

    init(frames) {
        this.animations = frames;
    }
    start () {
        if(!this.isPlaying) {
            this.update();
        } 
    }
    update () {
        this.currentFrame+=1;
        
        this.timer = setInterval(
            this.update.bind(this), 
            this.interval
        );
    }

    
    stop() {
        this.isPlaying = false;
        clearTimeout(this.timer);
    }
    
    reset() {
        this.interval = 1000/FPS;
        this.currentFrame = -1;
        this.animations = [];
        this.isPlaying = false;
    }
}