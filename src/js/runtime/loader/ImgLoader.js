let instance = null;

class ImgLoader {
    constructor() {
        if(instance) return;
        instance = this
        this.init();
    }
    init() {
        this.resource_container = [];
    }
    preload(imgSrc, name = 'test', callback) {
        var img = new Image(),
            self = this;
        img.onload = function() {
            console.log('ImgLoader======', this);
            this.onload = null;
            self.resource_container.push({src: imgSrc, name: name});
            callback(imgSrc);
        }
        img.onerror= function() {
            // self.preload(imgSrc, name);
            console.log(`${name}加载失败`);
        }
        img.src = imgSrc;
    }
}