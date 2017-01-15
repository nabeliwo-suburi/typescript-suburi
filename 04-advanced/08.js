// 型の番人(Type Guards)の続き
"use strict";
// ユーザ定義のType Guards
class Sample {
}
// 構造的部分型
let obj = {
    str: 'Hi!'
};
// 独自にSample型であることの判定を実装する
function isSample(s) {
    if (!s) {
        return false;
    }
    // とりあえずstrプロパティがあって値がstringなら
    // Sample型に互換性あり！という基準にする
    return typeof s.str === 'string';
}
if (isSample(obj)) {
    console.log(obj.str);
}
// isの左辺にthisを使う
class Node {
    isStringNode() {
        return this instanceof StringNode;
    }
    isNumberNode() {
        return this instanceof NumberNode;
    }
}
class StringNode extends Node {
    constructor(text) {
        super();
        this.text = text;
    }
}
class NumberNode extends Node {
    constructor(value) {
        super();
        this.value = value;
    }
}
let nodes = [new StringNode('TypeScript'), new NumberNode(8)];
// TypeScriptと8と表示される
nodes.forEach(n => {
    if (n.isStringNode()) {
        // n is StringNode
        console.log(n.text);
    }
    else if (n.isNumberNode()) {
        // n is NumberNode
        console.log(n.value);
    }
});
