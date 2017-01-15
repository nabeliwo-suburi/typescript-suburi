// 直和型(Union Types)の続き
// 注意！ここでやってるやり方よりもtype guardsを使う
// 型アサーションは悪い。常に悪い。なるべく使わないこと。

let obj: string | number | Date = null as any;

// string扱いしてみる
(obj as string).charAt(0);

// number扱いしてみる
(obj as number).toFixed(2);

// Date扱いしてみる
(obj as Date).getTime();

// 値の集合に含まれ無い型にしてみると普通に怒られる
// (<RegExp>obj).test('test');

export { }
