// インデックスシグニチャ(Index Signatures)続き

let obj = {
  str: 'string',
  num: 1
};

// 文字列リテラルによるアクセスだと普通に.アクセス同様に型情報が得られる
let str: string = obj['str'];
let num: number = obj['num'];
// ちなみに、存在しない要素にアクセスするとanyになる
// --noInplicitAnyを使うと暗黙的anyとしてちゃんと怒られる
// let any = obj['notExists'];

// 即値じゃないとだめ！コンパイラが処理できない
let propertyName1 = 'str';
// let str2 = obj[propertyName1];

// なお、string literal typesを使っても怒られます
let propertyName2: string = 'str';
// let str3 = obj[propertyName2];

export { str, num, propertyName1, propertyName2 }
