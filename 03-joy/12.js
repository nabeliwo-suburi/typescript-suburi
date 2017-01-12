// 構造的部分型(Structual Subtyping)
"use strict";
// クラスFooはstring型のstrという名前のプロパティと
// number型のnumという名前のプロパティをもつ
class Foo {
    constructor() {
        this.str = 'string';
        this.num = 1;
    }
}
exports.Foo = Foo;
// 構造が完全に一致…！
// 構造が同じならもう同じってことでいいよね
let obj = {
    str: 'Hi!',
    num: 42
};
exports.obj = obj;
// Pointの実装を強制する！
class PointImpl1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Pointの実装が強制されないけど互換性はある！
class PointImpl2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// 引数にPointをとる
function double(p) {
    return {
        x: p.x * 2,
        y: p.y * 2
    };
}
// 次の全ては正しいコードとなります
double(new PointImpl1(1, 3));
double(new PointImpl2(3, 4));
double({
    x: 5,
    y: 6
});
let p = {
    x: 7,
    y: 8,
    z: 9
};
double(p); // オブジェクトリテラルを直で渡す場合余計な要素があると怒られる
