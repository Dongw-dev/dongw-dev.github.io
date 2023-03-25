function extend (obj, target) {
    if(!target[obj]) {
        target[obj] = obj;
    }
}