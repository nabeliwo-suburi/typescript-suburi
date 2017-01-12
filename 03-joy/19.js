// ジェネリクス(Generic Types)の続き
"use strict";
// それぞれのTは独立していて、関連性はない
// クラスとジェネリクス
class SampleA {
    constructor(data) {
        this.data = data;
    }
}
exports.SampleA = SampleA;
// 使い方 <string>は省略しても引数から推論可能
let objA = new SampleA('str');
exports.objA = objA;
// 使い方
let objB = { data: 1 };
exports.objB = objB;
// オブジェクト型リテラル各種
// let obj: {
//   new <T>(value: T): any;
//   <T>(value: T): any;
//   methodA<T>(value: T): any;
//   // 型パラメータは複数あってもよい
//   methodB<T, U>(value: T): U;
// };
// 関数型
let func;
// 使い方
func = (array) => array[0];
func([1, 2, 3]);
// コンストラクタ型
let ctor;
// 使い方
ctor = SampleA;
new ctor('str');
let objC = { data: 1 };
exports.objC = objC;
