"use strict";
class Base {
    greeting(name) {
        return 'Hi! ' + name;
    }
}
class Inherit extends Base {
    greeting(name) {
        return super.greeting(name) + '. How are yout?';
    }
}
let obj = new Inherit();
console.log(obj.greeting('TypeScript'));
