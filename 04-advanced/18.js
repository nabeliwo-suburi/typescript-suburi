// ローカル型(Local Types)
"use strict";
{
    let obj = true;
    console.log(obj);
}
{
    let obj = 1;
    console.log(obj);
}
// ブロックスコープの外ではもはやData型を参照することはできない
// let obj: Data;
{
    // クラス、enum、Buzzなども
    class Foo {
    }
    var Bar;
    (function (Bar) {
        Bar[Bar["a"] = 0] = "a";
        Bar[Bar["b"] = 1] = "b";
    })(Bar || (Bar = {}));
    console.log(Foo, Bar.a, null); // 警告消し
}
// もちろんブロックスコープの外では上記3つは参照できない
// 現実的な活用例
class Foo {
    method() {
        let obj = 1;
        console.log(obj);
    }
}
exports.Foo = Foo;
