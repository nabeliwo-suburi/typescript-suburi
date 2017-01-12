// オブジェクト型リテラルで使える書き方４：インデックスシグニチャ(Index Signatures)
let objA: {
  [index: number]: string;
} = {};
let objB: {
  [index: string]: string;
} = {};

// どういった使い方ができるの？
let s1 = objA[1];

// --noImplicitAny付きだとちゃんとエラーになる
// var s2 = objA['test'];

// インデックスの型指定がstringの場合stringでもnumberでもok
let s3 = objB[1];
let s4 = objB['test'];

// 当てはまる値はこんな感じ
objA = {
  0: 'str',
  // オブジェクトリテラルで直接変数に代入する場合、型に存在しない値があるとエラーになる
  // str: 'str'
};
// 変数にオブジェクトリテラル直で代入でなければ余計なパラメータがついていても許される
let tmp = {
  0: 'str',
  str: 'str'
};
objA = tmp;

objB = {
  0: 'str',
  str: 'str',
  // インデックスの型がstringの場合、すべてのプロパティの型がインデックスシグニチャに反しないようにしなければならない
  // num: 1
};

export { s1, s3, s4 }
