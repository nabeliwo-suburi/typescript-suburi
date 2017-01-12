"use strict";
// オブジェクト型リテラルで使える書き方４：インデックスシグニチャ(Index Signatures)
let objA = {};
let objB = {};
// どういった使い方ができるの？
let s1 = objA[1];
exports.s1 = s1;
// --noImplicitAny付きだとちゃんとエラーになる
// var s2 = objA['test'];
// インデックスの型指定がstringの場合stringでもnumberでもok
let s3 = objB[1];
exports.s3 = s3;
let s4 = objB['test'];
exports.s4 = s4;
// 当てはまる値はこんな感じ
objA = {
    0: 'str',
};
// 変数にオブジェクトリテラル直で代入でなければ余計なパラメータがついていても許される
let tmp = {
    0: 'str',
    str: 'str'
};
objA = tmp;
objB = {
    0: 'str',
    str: 'str',
};
