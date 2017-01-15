// ローカル型(Local Types)

{
  type Data = string | boolean;
  let obj: Data = true;

  console.log(obj);
}
{
  type Data = number | Date;
  let obj: Data = 1;

  console.log(obj);
}

// ブロックスコープの外ではもはやData型を参照することはできない
// let obj: Data;

{
  // クラス、enum、Buzzなども
  class Foo { }
  enum Bar {
    a,
    b
  }
  interface Buzz { }

  console.log(Foo, Bar.a, null as any as Buzz); // 警告消し
}
// もちろんブロックスコープの外では上記3つは参照できない


// 現実的な活用例
class Foo {
  method() {
    
    // メソッド内でのみ使えるtype alias
    type Data = string | number;
    let obj: Data = 1;

    console.log(obj);
  }
}

export { Foo }
