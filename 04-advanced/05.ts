// 型の番人(Type Guards)の続き
// 関数の外側でのフローは内側では関係ない

let v1: string | number;
v1 = 'str';

if (typeof v1 === 'string') {
  let f = () => {
    // これはエラーになる
    // プログラムの字面的にはstringに確定されていそう…
    // しかし、関数はいつ実行されるかわからない
    // console.log(v1.toUpperCase());
  };
  // ここではvはまだstring
  f();

  // ここでvがnumberに
  v1 = 1;
  f();
}

// letではなくてconstを使うと…
const v2: string | number = null as any;
if (typeof v2 === 'string') {
  let f = () => {
    // v2の中身が入れ替えられる可能性はないのでエラーにならない
    console.log(v2.toUpperCase());
  };
  f();

  // constなので再代入しようとするとエラーになる
  // v2 = 1;
}
