'use strict';
// __import('./src/js/character.js');
// __import('./src/js/utils/request.js');
// __import('./src/js/utils/databus.js');
// __import('./src/js/model/scene.js');
// __import('./src/js/runtime/main.js');


// _imort('./src/js/base/person.js');
// _imort('./src/js/model/me.js'); 

// import './src/js/character.js';
wei.runtime.init({
    projectFiles: {
        dir: './src/js/game',
        filePaths: [
            '/layer/PlayerLayer.js',
            '/layer/MapLayer.js',
            '/config/playerConfig.js',
            '/player/index.js',
        ]
    },
    onload() {
        console.log('onload');
        const playerLayer = new PlayerLayer();
        const mapLayer = new MapLayer();
    }
});
// window.onload=function(){
    // var character = new Character()
    // console.log(character)
    // character.init()
    // new Scene({ id: 'scene' });
    // new Main();
    // console.log(scene);
    // scene.initHero({
    //     id: 'hero'
    // });
    // var arr = {a:{b:1},c:2};
    // var arr3 = deepClone(arr);
    // const url = "123?tst=2&sta=3"
    // var rs = getQueryString(url)
    // console.log(debounce)
   
// }
// class Scene {

//     constructor(options){
//         // this.id = options.id
//         this.init(options);
//         // this.draw(options);
//     }
//     init(options) {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         canvas.width = 500;
//         canvas.height = 500;
//         document.body.appendChild(canvas);
//     }

//     draw(options) {
//         // this.drawBackgroun d(options.ctx);
//     }

// }


