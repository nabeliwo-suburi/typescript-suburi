// 型の番人(Type Guards)

// undefinedの可能性を潰す
function upperA(word?: string) {
  // wordは省略可能引数なのでstring | undefined
  // ここでwordをいきなり使おうとするとエラーになる
  // word.toUpperCase();

  if (word == null) { // wordがnullかundefinedの時
    // undefinedの可能性をstringで上書き！
    word = 'TypeScript';
  }

  // undefinednお可能性を潰したのでこの時点でwordはstring確定！
  console.log(word.toUpperCase());
}

function upperB(word?: string) {
  // 別解: JSで||演算子は最初にtruthyになった値を返す
  // ので、undefined(falsy)な時は'TypeScript'で上書きされる
  word = word || 'TypeScript';

  // undefinedの可能性を潰したのでこの時点でwordはstring確定！
  console.log(word.toUpperCase());
}

function upperC(word = 'TypeScript') {
  // TypeScript的に一番素直なパターン
  console.log(word.toUpperCase());
}


function upperAll(words: string | string[]) {
  if (typeof words === 'string') {
    // stringならstring[]に変換する
    words = [words];
  }

  // この時点ではwordsはstring[]に揃えられる
  return words.map(word => word.toUpperCase());
}

console.log(upperAll('TypeScript'));
console.log(upperAll(['TypeScript', 'JavaScript']));

interface Foo {
  value: number | string;
}
let foo: Foo = {
  value: 'TypeScript'
}
// number | stringではtoUpperCaseがあるか確定できない
// foo.value.toUpperCase();

// 変数直だけではなくて、変数のプロパティでもtype guardsが使える
if (typeof foo.value === 'string') {
  // ここではfoo.valueはstringに絞り込まれている！一時変数いらない！
  foo.value.toUpperCase();
}

export { upperA, upperB, upperC }
