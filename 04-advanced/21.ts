// タプル型(Tuple Types)の続き

// 要素が多い分にはok
let tuple: [string, number] = ['str', 1, 'test'];

// 範囲外の要素の型はすべての要素のunion、つまりstring | numberになる
let value = tuple[2];

// 以下はだめ。trueはstring | numberではないため
// tuple = ['str', 1, true];


let tuple1: [string, number] = ['str', 1];

// 先頭をnumberに
tuple.unshift(1);

// 実行時エラーになってしまう
tuple1[0].charAt(0);

export { value }
