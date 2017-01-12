// 型アサーション(Type Assertions)の続き
"use strict";
let obj = new Base();
// 本当はBaseクラスがnumプロパティも持ってるんだけど…
// 型定義が不足しているので10秒で解決するにはanyでごまかすしかない。
// きれいごとだけじゃ世の中生きていけないんじゃよ…
// でも、本当は型定義の方を修正するのが正しいです
let num = obj.num;
exports.num = num;
