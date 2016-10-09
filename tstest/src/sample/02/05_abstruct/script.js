"use strict";
class Animal {
    get poo() { }
    sleep() {
        return 'zzzZZZ...';
    }
}
// abstract classはそのままではインスタンス化できない
// new Animal();
class Cat extends Animal {
    constructor(...args) {
        super(...args);
        // プロパティの実装を強制される
        this.name = 'Cat';
        this.poo = 'poo...';
    }
    // メソッドの実装を強制される
    speak() {
        return 'merow';
    }
}
new Cat();
