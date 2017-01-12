// 関数
"use strict";
function hello(word) {
    return `Hello, ${word}`;
}
hello('TypeScript');
// 返り値の型を省略すると返り値の型から推論される。明記したほうが読みやすい場合もある
function bye(word) {
    return `Bye, ${word}`;
}
bye('TypeScript');
// ?をつけると呼び出したときに引数が省略可能になる
function hey(word) {
    // 省略可能にした時はundefinedの時の考慮が必要！
    return `Hey, ${word || 'TypeScript'}`;
}
hey();
// デフォルト値を指定することもできる(?を付けたのと同じ扱い+α)
function ahoy(word = 'TypeScript') {
    return `Ahoy! ${word}`;
}
ahoy();
// 可変長引数
function hellooo(...args) {
    return `Hello, ${args.join(" & ")}`;
}
// Hello, TS & JSと表示される
hellooo('TS', 'JS');
