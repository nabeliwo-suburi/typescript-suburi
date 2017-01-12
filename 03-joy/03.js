"use strict";
// オブジェクト型リテラルで使える書き方２：コールシグニチャ(Call Signatures)
let obj;
// 当てはまる値はこんな感じ
obj = word => `Hello, ${word}`;
obj = (word) => {
    return `Hello, ${word}`;
};
obj = function (word) {
    return `Hello, ${word}`;
};
// 呼び出してみよう
let str = obj('TypeScript');
console.log(str);
// オーバーロードも表現出来る
let ovl;
// 当てはまる値はこんな感じ
// すべての引数と返り値に矛盾しないようにしなければならない…
ovl = (word) => {
    if (typeof word === 'String') {
        return `Hello, ${word}`;
    }
    else {
        return 42;
    }
};
// 呼び出してみよう
let ovlStr = ovl('TypeScript');
// Hello, TypeScriptと表示される
console.log(ovlStr);
let ovlNum = ovl();
// 42と表示される
console.log(ovlNum);
