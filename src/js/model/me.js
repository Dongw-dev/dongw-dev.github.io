function me (options = {}) {
    Person.call(this);
    // this.initMe(options);
}
me.prototype = Object.create(Person.prototype);