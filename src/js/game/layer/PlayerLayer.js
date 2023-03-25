class PlayerLayer extends Layer {
    constructor() {
        super({name: 'player'});
        this.setZIndex(2);
        this.initLayer();
    }
    initLayer(){
        const player = new Player(this.getCanvasBuff());
        this.add(player);
        console.log(this.spriteContainer);
        this.start();
        // console.log(this.contextBuff);
        // this.contextBuff.rect(20,20,150,100);
        // this.contextBuff.stroke();
    }
}