// 直和型(Union Types)の続き
"use strict";
// 引数なしの返り値stringな関数な型注釈
let func;
exports.func = func;
// 素直に考えるとこう書けてもいいっしょ！でもダメ！
// let a: () => string | () => boolean;
// 型名をカッコでくくる必要がある。これならok
let b;
exports.b = b;
// もしくはオブジェクト型リテラル使う
let c;
exports.c = c;
// union typesじゃないときでも使えるけど見づらい
let d;
exports.d = d;
exports.func = func = () => 'str';
exports.b = b = () => 'str';
exports.c = c = () => 'str';
exports.d = d = () => 'str';
