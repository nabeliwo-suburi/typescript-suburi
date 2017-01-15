// 型の番人(Type Guards)の続き
"use strict";
// Type Guardsと論理演算子
let obj = null;
// &&演算子で絞り込み
typeof obj === 'string' && obj.charAt(0);
// 次のようなコードはエラーになる
// typeof obj === 'number' && obj.charAt(0);
// ||演算子でunion typesに
if (typeof obj === 'string' || typeof obj === 'boolean') {
}
else {
}
// 参考演算子は普通にif文と一緒の挙動
typeof obj === 'string' ? obj.charAt(0) : obj;
// 次と等価
if (typeof obj === 'string') {
    obj.charAt(0);
}
else {
    obj;
}
// 一応、否定演算子にも対応している
if (!(typeof obj !== 'string')) {
    // 否定の否定は普通にそのまんまstring。ちゃんと絞り込まれる
    obj.charAt(0);
}
