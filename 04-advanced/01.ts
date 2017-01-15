// 直和型(Union Types)

let a: string | boolean | undefined;
// string | boolean なので次はおっけー！
a = 'str';
a = true;
// numberはあかん。
// a = 1;

// b1とb2を合体させてみよう
let b1: string | boolean | undefined;
let b2: boolean | number | undefined;
// cの型はstring | number | boolean | undefinedとなる
let c: typeof b1 | typeof b2;

// andの型はstring | boolean
let and = 'str' || true;
// condの型はnumber | string
let cond = true ? 1 : 'str';
// arrayの型は(number | boolean | string)[]
let array = [1, true, 'str'];

export { b1, b2, c, and, cond, array }
