let instance;

class DataBus {
    constructor() {
        if(instance) return;
        instance = this;
    }
    reset () {
        this.qibos = [];
    }
}

const databus = new DataBus();
