// 型の別名(Type Alias)

// type FooReturns = string | number | boolean;

// interface Foo {
//   bar(): FooReturns;
//   buzz(): FooReturns;
//   barbuzz(): FooReturns;
// }

// tuple typesに名前つける
type Point = [number, number];
type Circle = [Point, number];

let c: Circle = [[1, 2], 3];

// でも、こっちのほうがTypeScriptとしては適切
namespace alternative {
  class Point {
    constructor(public x: number, public y: number) {
    }
  }
  class Circle {
    constructor(public p: Point, public r: number) {
    }
  }
  let c2: Circle = new Circle(new Point(1, 2), 3);
  console.log(c2.p, c2.r);
}


// 型の別名を作るだけなので何かの値を作るわけではない
// type StringArray = string[];
// なのでこういうことはできない
// let strArray = new StringArray();

export { Point, Circle, c, alternative }
