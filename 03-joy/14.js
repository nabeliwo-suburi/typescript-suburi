"use strict";
// 型アサーション(Type Assertions)
let obj = 1;
// お前は今後numberとして生きよ…
let num = obj;
let str = 'string';
// 非常に外道なコードを書くことができる…人としての良識を疑う
// stringをnumberな型の変数に代入するだなんてなんて卑劣な…！
num = str;
// 後置のキャストもあります as 型名という形式
num = str;
