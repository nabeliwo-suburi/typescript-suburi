// namespace(内部モジュール)のimport句
var a;
(function (a) {
    class Sample {
    }
    a.Sample = Sample;
    ;
})(a || (a = {}));
var b;
(function (b) {
    // 他のモジュールも普通に参照できる
    let objA;
    objA = new a.Sample();
    // めんどくさいならimport句を使えばいい
    var Sample = a.Sample;
    let objB;
    objB = new Sample();
    // 別に違う名前をつけてもいい(けど混乱しちゃうかも？)
    var Test = a.Sample;
    let objC;
    objC = new Test();
    // 別に名前が違っても互換性が失われるわけではないのだ
    objA = new Test();
})(b || (b = {}));
