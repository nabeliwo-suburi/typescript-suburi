// 直和型(Union Types)の続き
// 注意！ここでやってるやり方よりもtype guardsを使う
// 型アサーションは悪い。常に悪い。なるべく使わないこと。
"use strict";
let obj = null;
// string扱いしてみる
obj.charAt(0);
// number扱いしてみる
obj.toFixed(2);
// Date扱いしてみる
obj.getTime();
