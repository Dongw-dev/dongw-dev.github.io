/**
 * 图层类
 * 实现画布分层渲染
 */
const STATUS_NOMRAL = 0;
const STATUS_CHANGE = 1;
class Layer {
    constructor(options) {
        this.canvasBuff = null;
        this.contextBuff = null;

        this.name = options.name;
        this.spriteContainer = [];
        // this.zIndex = options.zIndex || 0;
        this.status = STATUS_NOMRAL;
        this.aniId = null;
        this.aniLoop = null;
        this.init();
    }
    init() {
        this.createCanvasBuff();
        this.getCanvasBuff();
        this.getContextBuff();
    }
    createCanvasBuff() {
        const canvas = document.createElement('canvas');
        canvas.id = this.name;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.zIndex = this.zIndex || 0;
        document.body.append(canvas);
        
        this.canvasBuff = canvas;
    }
    setZIndex(zIndex) {
        this.zIndex = zIndex;
        this.canvasBuff.style.zIndex = this.zIndex;
    }
    getCanvasBuff() {
        return this.canvasBuff
    }
    getContextBuff() {
        this.contextBuff = this.canvasBuff.getContext("2d");
    }
    
    
    add (sprite) {
        this.spriteContainer.push(sprite);
    }
    clear () {
        this.contextBuff.clearRect(0, 0, canvas.width, canvas.height);
    }
    start() {
        this.aniLoop = this.loop.bind(this);
        this.aniId = window.requestAnimationFrame(this.aniLoop)
    }
    loop(){
        // console.log('loop')
        this.render();
        this.id = window.requestAnimationFrame(this.aniLoop);
    }
    render(){
        this.spriteContainer.forEach(sp => {
            sp.show(this.contextBuff)
        })
    }
    update() {
        this.contextBuff.drawImage(
            
        )
    }
}