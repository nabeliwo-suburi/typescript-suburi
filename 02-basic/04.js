// クラスの継承
"use strict";
class Base {
    greeting(name) {
        return 'Hi! ' + name;
    }
}
class Inherit extends Base {
    greeting(name) {
        return super.greeting(name) + '. How are you?';
    }
}
let obj = new Inherit();
// Hi! TypeScript. How are you? と出力される
console.log(obj.greeting('TypeScript'));
// 抽象クラス (Abstract Class)
class Animal {
    sleep() {
        return 'zzzZZZ...';
    }
}
// もちろん、abstract classはそのままではインスタンス化できない
// new Animal();
class Cat extends Animal {
    constructor() {
        super(...arguments);
        // プロパティの実装を強制される
        this.name = 'Cat';
        this.poo = 'poo...';
    }
    // メソッドの実装を強制される
    speak() {
        return 'meow';
    }
}
new Cat;
