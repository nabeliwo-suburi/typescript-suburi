abstract class Animal {
  abstract name: string;
  abstract get poo(): string;

  abstract speak(): string;
  sleep(): string {
    return 'zzzZZZ...';
  }
}

// abstract classはそのままではインスタンス化できない
// new Animal();

class Cat extends Animal {
  // プロパティの実装を強制される
  name = 'Cat';
  poo = 'poo...';

  // メソッドの実装を強制される
  speak(): string {
    return 'merow';
  }
}

new Cat();

export { }
