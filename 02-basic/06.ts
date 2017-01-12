// アロー関数

// 次の2つは(thisが絡まない限り)等価
let funcA = () => true;
let funcB = function() {
  return true;
}
funcA();
funcB();

// 引数を1つ取って返り値なしの関数を表します
function asyncModoki(callback: (value: string) => void) {
  callback('TypeScript');
}
// ES5時代の書き方
asyncModoki(function(value: string) {
  console.log(`Hello, ${value}`);
});
// アロー関数だとさらに楽
asyncModoki(value => console.log(`Hello, ${value}`));
// アロー関数に型付けをする場合
asyncModoki((value: string): void => console.log(`Hello, ${value}`));

export { }
