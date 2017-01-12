// オブジェクト型リテラルで使える書き方２：コールシグニチャ(Call Signatures)
let obj: {
  (word: string): string;
};

// 当てはまる値はこんな感じ
obj = word => `Hello, ${word}`;
obj = (word: string): string => {
  return `Hello, ${word}`;
};
obj = function(word: string): string {
  return `Hello, ${word}`;
};

// 呼び出してみよう
let str = obj('TypeScript');
console.log(str);


// オーバーロードも表現出来る
let ovl: {
  // overloadもできるよ
  (word: string): string;
  (): number;
};
// 当てはまる値はこんな感じ
// すべての引数と返り値に矛盾しないようにしなければならない…

ovl = (word?: string): any => {
  if (typeof word === 'String') {
    return `Hello, ${word}`;
  } else {
    return 42;
  }
};

// 呼び出してみよう
let ovlStr = ovl('TypeScript');
// Hello, TypeScriptと表示される
console.log(ovlStr);

let ovlNum = ovl();
// 42と表示される
console.log(ovlNum);

export { }
