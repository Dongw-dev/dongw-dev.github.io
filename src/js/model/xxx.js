function Scene (options = {}){
    this.init(options)
}
Scene.prototype.init = function(options) {
    let vm = this;
    vm.$options = options;
    initCanvas(vm);
    initCtx(vm);
    // proxy(vm, 'ctx');
    initComponents(vm);
    render(vm);
}
function initCanvas(vm) {
    let opt = vm.$options;
    const canvas = document.createElement("canvas");
    canvas.id = opt.id;
    canvas.width = 500;
    canvas.height = 500;
    vm.vnode = { canvas }
}
function initCtx(vm) {
    const { canvas } = vm.vnode;
    const ctx = canvas.getContext("2d");
    vm.ctx = ctx;
}
function render(vm) {
    const { canvas } = vm.vnode;
    document.body.appendChild(canvas);    
}
function proxy(vm, target, sourceTarget) {
    console.log('val=', vm);
    console.log('val=', target);
    const sharedPropertyDef = {
        enumerable: true,
        configurable: true,
        get: null,
        set: null
    };
    sharedPropertyDef.get = function () {
        return this[sourceTarget][target];
    }
    sharedPropertyDef.set = function (val) {
        console.log('val=', val);
    }
    Object.defineProperty(vm, target, sharedPropertyDef);
}
function initComponents(vm) {
    // const options = mergeOpts(vm.ctx)
    vm.initHero = initHero;
}

function initHero(options = {}) {
    const per = new me(options)
    console.log('options', options)
    console.log('oer', per)
}