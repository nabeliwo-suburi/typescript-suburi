// 直和型(Union Types)
"use strict";
let a;
// string | boolean なので次はおっけー！
a = 'str';
a = true;
// numberはあかん。
// a = 1;
// b1とb2を合体させてみよう
let b1;
exports.b1 = b1;
let b2;
exports.b2 = b2;
// cの型はstring | number | boolean | undefinedとなる
let c;
exports.c = c;
// andの型はstring | boolean
let and = 'str' || true;
exports.and = and;
// condの型はnumber | string
let cond = true ? 1 : 'str';
exports.cond = cond;
// arrayの型は(number | boolean | string)[]
let array = [1, true, 'str'];
exports.array = array;
