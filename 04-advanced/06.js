// 型の番人(Type Guards)の続き
"use strict";
// 実際の型がわからないなら調べる
let obj = null;
if (typeof obj === 'string') {
    // ここではstringと確定されている
    obj.charAt(0);
}
else {
    // ここでは消去法でnumberと確定されている
    obj.toFixed(2);
}
// 変なコードを書くとコンパイラが教えてくれる
let objA;
if (typeof objA === 'string') {
}
let objB = 1;
if (typeof objB === 'string') {
}
