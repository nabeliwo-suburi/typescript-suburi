// インデックスシグニチャ(Index Signatures)続き
"use strict";
let obj = {
    str: 'string',
    num: 1
};
// 文字列リテラルによるアクセスだと普通に.アクセス同様に型情報が得られる
let str = obj['str'];
exports.str = str;
let num = obj['num'];
exports.num = num;
// ちなみに、存在しない要素にアクセスするとanyになる
// --noInplicitAnyを使うと暗黙的anyとしてちゃんと怒られる
// let any = obj['notExists'];
// 即値じゃないとだめ！コンパイラが処理できない
let propertyName1 = 'str';
exports.propertyName1 = propertyName1;
// let str2 = obj[propertyName1];
// なお、string literal typesを使っても怒られます
let propertyName2 = 'str';
exports.propertyName2 = propertyName2;
