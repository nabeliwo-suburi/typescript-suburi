// 型の番人(Type Guards)
"use strict";
// undefinedの可能性を潰す
function upperA(word) {
    // wordは省略可能引数なのでstring | undefined
    // ここでwordをいきなり使おうとするとエラーになる
    // word.toUpperCase();
    if (word == null) {
        // undefinedの可能性をstringで上書き！
        word = 'TypeScript';
    }
    // undefinednお可能性を潰したのでこの時点でwordはstring確定！
    console.log(word.toUpperCase());
}
exports.upperA = upperA;
function upperB(word) {
    // 別解: JSで||演算子は最初にtruthyになった値を返す
    // ので、undefined(falsy)な時は'TypeScript'で上書きされる
    word = word || 'TypeScript';
    // undefinedの可能性を潰したのでこの時点でwordはstring確定！
    console.log(word.toUpperCase());
}
exports.upperB = upperB;
function upperC(word = 'TypeScript') {
    // TypeScript的に一番素直なパターン
    console.log(word.toUpperCase());
}
exports.upperC = upperC;
function upperAll(words) {
    if (typeof words === 'string') {
        // stringならstring[]に変換する
        words = [words];
    }
    // この時点ではwordsはstring[]に揃えられる
    return words.map(word => word.toUpperCase());
}
console.log(upperAll('TypeScript'));
console.log(upperAll(['TypeScript', 'JavaScript']));
let foo = {
    value: 'TypeScript'
};
// number | stringではtoUpperCaseがあるか確定できない
// foo.value.toUpperCase();
// 変数直だけではなくて、変数のプロパティでもtype guardsが使える
if (typeof foo.value === 'string') {
    // ここではfoo.valueはstringに絞り込まれている！一時変数いらない！
    foo.value.toUpperCase();
}
