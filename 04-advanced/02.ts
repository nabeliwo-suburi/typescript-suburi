// 直和型(Union Types)の続き

// 引数なしの返り値stringな関数な型注釈
let func: () => string;

// 素直に考えるとこう書けてもいいっしょ！でもダメ！
// let a: () => string | () => boolean;

// 型名をカッコでくくる必要がある。これならok
let b: (() => string) | (() => boolean);
// もしくはオブジェクト型リテラル使う
let c: { (): string; } | { (): boolean; };

// union typesじゃないときでも使えるけど見づらい
let d: (() => string);

func = () => 'str';
b = () => 'str';
c = () => 'str';
d = () => 'str';

export { func, b, c, d }
