"use strict";
let objA = {
    str: 'TypeScript'
};
// 上書きはできない
// objA.str = 'JavaScript';
// 別にconstではないので迂回路から変更できてしまう
let objB = {
    str: 'Mutable'
};
objA = objB;
// objB経由でobjA.strを書き換える
objB.str = 'Modified!';
// Modified!と表示される
console.log(objA.str);
// readonlyの変更はconstructorだけ
class Bar {
    constructor() {
        // 変更可能
        this.str = 'TypeScript';
    }
    modify() {
        // readonlyが変更できるのはconstructorだけ！
        // this.str = 'JavaScript';
    }
}
exports.Bar = Bar;
// getアクセサのみの実装について型定義ファイルを生成させると、これもreadonly修飾子に変換される
class Sample {
    get name() {
        return 'TypeScript';
    }
}
exports.Sample = Sample;
