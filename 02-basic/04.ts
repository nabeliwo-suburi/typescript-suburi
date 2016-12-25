// クラスの継承

class Base {
  greeting(name: string) {
    return 'Hi! ' + name;
  }
}

class Inherit extends Base {
  greeting(name: string) {
    return super.greeting(name) + '. How are you?';
  }
}

let obj = new Inherit();
// Hi! TypeScript. How are you? と出力される
console.log(obj.greeting('TypeScript'));


// 抽象クラス (Abstract Class)
abstract class Animal {
  abstract name: string;
  abstract get poo(): string;

  abstract speak(): string;
  sleep(): string {
    return 'zzzZZZ...';
  }
}
// もちろん、abstract classはそのままではインスタンス化できない
// new Animal();

class Cat extends Animal {
  // プロパティの実装を強制される
  name = 'Cat';
  poo = 'poo...';

  // メソッドの実装を強制される
  speak(): string {
    return 'meow';
  }
}

new Cat;

export { }

