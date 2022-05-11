function Person (options) {
    this.init(options)
}
Person.prototype = {
    init: function(options = {}) {
        
    },
    drawToCanvas: function(ctx) {

    }

}
Person.prototype.init = function (options = {}) {
    const vm = this;
    console.log('vm====',vm)
    vm.$options = mergeOptions(
        options, 
        { isControled: true }, 
        { state: {} }
    );
    // initPosition(vm);
    // initEvent(vm);
    // initState(vm);
}

Person.prototype.initPosition = function (vm) {
    const { state } = vm.$options;
    const position = {
        screenTop: 0,
        screenLeft: 0
    }
    mergeOptions(state, position);
}

Person.prototype.initState = function (vm) {
    const { state } = vm.$options;
    let attr = {
        atk: 1,
        def: 1,
        hp: 50
    }
    mergeOptions(state, attr);
}

Person.prototype.initState = function (vm) {
    const options = vm.$options;
    let keysDown = {};
    if(options.isControled) {
        addEventListener('keydown', function(e){
            keysDown[e.key] = true;
        });
        addEventListener('keyup', function(e){
            delete keysDown[e.key];
        });
    } else {
        
    }
}

// function render(vm) {
//     console.log('vm===', vm)
// }
function mergeOptions(...args) {
    return Object.assign(...args, {})
}