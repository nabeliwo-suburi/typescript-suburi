// 文字列リテラル型(String Literal Types)
"use strict";
// '文字列'が型。値ではない
let suit;
// ok
suit = 'Heart';
// (10 + 3) + 5を表現する
let node = {
    type: 'add',
    left: {
        type: 'add',
        left: { type: 'leaf', value: 10 },
        right: { type: 'leaf', value: 3 }
    },
    right: {
        type: 'leaf',
        value: 5
    },
};
// 18と表示される
console.log(calc(node));
function calc(root) {
    // プロパティの値で型の絞り込みができる！
    switch (root.type) {
        case 'leaf':
            // 型はLeafで決定
            return root.value;
        case 'add':
            // 型はAddで決定！
            return calc(root.left) + calc(root.right);
        default:
            throw new Error('unknown node');
    }
}
