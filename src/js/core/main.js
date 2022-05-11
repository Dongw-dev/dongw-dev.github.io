/**
 * 键盘输入事件只发生在当前拥有焦点的HTML元素上，如果没有元素拥有焦点，那么事件将会上移至windows和document对象
 * 解决方式： 让canvas元素处于聚焦状态，并给它绑定键盘事件。
 * canvas.tabIndex = 0;
 * canvas.focus();
 */
const canvas = document.createElement("canvas");
canvas.tabIndex = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.focus();


let then = Date.now();
let now,delta;
// console.log('then======', then);


function Main () {
    this.init();
}

Main.prototype.init = function () {
    databus.reset();
    if(!this.id) this.id = 0;
    this.player = new Player();
    this.aniLoop = this.loop.bind(this);
    window.cancelAnimationFrame(this.id);
    this.id = window.requestAnimationFrame(this.aniLoop);
}

Main.prototype.render = function (delta) {
    // console.log(ctx)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.player.showUp(ctx);
    databus.qibos.forEach(item => {
        item.showUp(ctx);
    });
    // console.log('count----',this.player.count);
}

Main.prototype.update = function () {
    databus.qibos.forEach(item => {
        item.update();
    });
    this.player.update(delta/1000);
}

Main.prototype.loop = function () {
    now = Date.now();
    delta = now - then;
    // console.log('now======', now);
    // console.log('delta======', delta);
    if(delta > 100){
        this.render(delta);
        this.update()
        then = now;
    }
    // console.log('then1======', then);
    this.id = window.requestAnimationFrame(this.aniLoop);
}