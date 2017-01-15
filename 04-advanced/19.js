// 型クエリ(Type Queries)
"use strict";
class Sample {
}
// この書き方だとSampleのインスタンスになる Sampleクラスそのものではない
let obj;
// Sample自体の型をコピー！つまりこれはSampleクラスそのものです
let clazz;
// それぞれに当てはまる値は次のとおり
obj = new Sample();
clazz = Sample;
obj = new clazz();
// clazzを頑張って手で書くと次に等しい
let alterClazz;
alterClazz = clazz;
clazz = alterClazz;
// prototypeを参照するとメソッドの型が取れる
class Sample2 {
    constructor() {
        this.hello = (word = 'TypeScript') => `Hello, ${word}`;
    }
}
let obj2 = new Sample2();
obj2.bye = obj2.hello;
// ここまで複雑にするならインターフェース使うべき
// このコードは(死ぬほどよみにくいけど)正しい
function move(p1, p2) {
    return {
        x1: p1.x1 + p2.x1,
        y1: p1.y1 + p2.y1,
        x2: p1.x2 + p2.x2,
        y2: p1.y2 + p2.y2
    };
}
let rect = move({
    x1: 2, y1: 1,
    x2: 4, y2: 4 // プロパティ
}, {
    x1: 3, y1: 3,
    x2: 4, y2: 4
});
rect.x1;
rect.x2;
