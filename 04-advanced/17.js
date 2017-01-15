// 関数のthisの型の指定(Specifying This Types For Functions)
"use strict";
// 関数内部でのthisの型を偽の第一引数で指定
function testA() {
    console.log(this.toUpperCase());
}
// こういう利用を想定しているはず
// TYPESCRIPTと表示される
testA.bind('TypeScript')();
// 普通に呼び出すとエラーになる
// testA();
// 1つめの仮引数がthisの型指定だった場合、それは偽物の仮引数
// 実際に何かを渡すとエラーになってしまう
// testA('TypeScript');
function testB() {
    // --noImplicitThisオプション利用時、関数内でthisにアクセスすると怒られる
    // console.log(this.toUpperCase());
}
exports.testB = testB;
function testC(postfix) {
    console.log(`${this.toUpperCase()}${postfix}`);
}
// TYPESCRIPT!と表示される
testC.bind('TypeScript')('!');
let el1 = null;
el1.addEventListener('click', function () {
    // thisの型はHTMLBodyElement
    this.innerText = 'Hi!';
});
el1.addEventListener('click', () => {
    // アロー関数の場合thisの値は変えられない
    // this.innerText = 'Hi!';
});
let el2 = null;
el2.addEventListener('click', function () {
    // thisの型はHTMLDivElement
    this.innerText = 'Hi!';
});
