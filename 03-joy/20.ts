// ジェネリクス(Generic Types)の続き
// 型パラメータと制約

class Base {
  str: string;
}
class InheritA extends Base {
  num: number;
}

// TはBaseを継承済みの型でなければならない制約
interface Sample<T extends Base> {
  method(): T;
}

// これはOK InheritAはBaseを継承している
// let objA: Sample<InheritA>;

// これはだめ RegExpはBaseを継承していない
// let objB: Sample<RegExp>;

// これはOK 指定したオブジェクト型リテラルはBaseクラスの要件を満たす
// let objC: Sample<{ str: string; }>;

interface Service<T> {
  service(t: T): T;
}

// F-Bounded Polymorphismの例
// 制約の内容に自分自身の参照を含む ごく稀に使う
function f<T extends Service<T>>(x: T) {
  return x.service(x);
}

export { Base, InheritA, Sample, Service, f }