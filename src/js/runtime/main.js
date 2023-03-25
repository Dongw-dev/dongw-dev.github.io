/*
 * 键盘输入事件只发生在当前拥有焦点的HTML元素上，如果没有元素拥有焦点，那么事件将会上移至windows和document对象
 * 解决方式： 让canvas元素处于聚焦状态，并给它绑定键盘事件。
 * canvas.tabIndex = 0;
 * canvas.focus();
 */
// const canvas = document.createElement("canvas");
// canvas.tabIndex = 0;
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const ctx = canvas.getContext("2d");
// document.body.appendChild(canvas);
// canvas.focus();

/**
 * 主程序
 * 入口配置
 */
// let then = Date.now();
// let now,delta;
// console.log('then======', then);

// function main () {
//     this.init();
// }

// v1
// Main.prototype.init = function () {
//     databus.reset();
//     if(!this.id) this.id = 0;
//     this.player = new Player();
//     this.aniLoop = this.loop.bind(this);
//     window.cancelAnimationFrame(this.id);
//     this.id = window.requestAnimationFrame(this.aniLoop);
// }

// Main.prototype.render = function () {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.player.draw(ctx);
//     databus.qibos.forEach(item => {
//         item.draw(ctx);
//     });
// }

// Main.prototype.update = function (delta) {
//     databus.qibos.forEach(item => {
//         item.update();
//     });
//     this.player.update(delta/1000);
// }

// Main.prototype.loop = function () {
//     databus.frame++;
//     now = Date.now();
//     delta = now - then;
//     this.render(delta);
//     this.update()
//     then = now;
//     this.id = window.requestAnimationFrame(this.aniLoop);
// }

// v2

const namespace = function (name) {
    const parent = window;
    
    parent[name] = parent[name] || {};
    
    return parent;
}
namespace('wei');


function runtime () {
    // this.init();
}

class ScriptLoader {

    constructor() {
        this.container = [];
    }
    load() {
        let file = null;
        let script = null;

        file = this.container.shift();
        
        console.log(`正在加载${file.name}`);

        script = this.createScript(file);

        this.insertScript(script);
        
        this.loadComplete(script, this.load);
    }
    
    loadComplete(script, fn) {
        // IE
        if(script.readyState) {
            
        } else {
            script.onload = () => {
                console.log(`${script}加载完成`);
                if(this.container.length === 0) {
                    console.log('全部加载完成');
                    // config.onload();
               } else {
                    fn.call(this);
               }
            }
        }
    }

    createScript(file) {
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.src = file.src;

        return script;
    }
    
    insertScript (script) {
        const body = document.body;
        body.appendChild(script);
    }
    
    add(src) {
        let fileName = src.split(src.lastIndexOf('/'), src.lastIndexOf('.'));
        this.container.push({src: src, name: fileName});
    }

    init() {
        return new this();
    }
}

runtime.prototype = {
    options: {

    },
    init: function(...argumnents) {
        // debugger
        const args = argumnents[0];
        if(args['projectFiles']) {
            Object.assign(config, { "projectFiles": args['projectFiles'] });
            console.log('config===', config);
            this.loadScripts();
        }
        if(args['onload']) this.initLifeCycle(this, args['onload']);

    },
    
    loadScripts: function() {
        const scriptLoader = new ScriptLoader();
        let systemFilePaths = config.systemFilePaths;
        let projectFile = config.projectFiles;
        let projectDir = projectFile.dir;
        let projectPaths = projectFile.filePaths;
        let dir = config.dir;
        window.addEventListener('DOMContentLoaded', function(e) {
            console.log(e);
            systemFilePaths.forEach(path => {
                scriptLoader.add(dir + path);
            });
            projectPaths.forEach(path => {
                scriptLoader.add(projectDir + path);
            });
            scriptLoader.load();
        })
    },
    setConfig(file) {
        Object.assign(config, file);
        console.log('config===', config);
        
        this.loadScripts();
    },
    initLifeCycle(vm, fn) {
        // console.log('initLiftStyle')
        setTimeout(()=>{
            fn();
        }, 100)
    },
    
}

const config = {
    dir: './src/js/runtime',
    systemFilePaths: [
        '/base/Layer.js',
        '/base/Sprite.js',
        '/base/Animator.js'
    ]
}



wei.runtime = new runtime();