"use strict";
// オブジェクト型リテラルで使える書き方５：メソッドシグニチャ(Method Signatures)
let obj;
// 当てはまる値はこんな感じ
obj = {
    hello(word) {
        return `Hello, ${word}`;
    }
};
obj = {
    hello: (word) => `Hello, ${word}`
};
obj = {
    hello: function (word) {
        return `Hello, ${word}`;
    }
};
// プロパティシグニチャ + 関数型リテラルと実質同じ意味
let obj2;
obj2 = obj;
obj = obj2;
