let instance;

class DataBus {
    constructor() {
        if(instance) return;
        instance = this;
    }
    reset () {
        this.frame = 0;
        this.qibos = [];
        this.keys = {};
    }
    set(key, val) {
        this.keys[key] = val;
    }
    get(key) {
        return this.keys[key];
    }
}