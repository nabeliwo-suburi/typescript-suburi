// 関数

function hello(word: string): string {
  return `Hello, ${word}`;
}
hello('TypeScript');

// 返り値の型を省略すると返り値の型から推論される。明記したほうが読みやすい場合もある
function bye(word: string) {
  return `Bye, ${word}`;
}
bye('TypeScript');

// ?をつけると呼び出したときに引数が省略可能になる
function hey(word?: string) {
  // 省略可能にした時はundefinedの時の考慮が必要！
  return `Hey, ${word || 'TypeScript'}`;
}
hey();

// デフォルト値を指定することもできる(?を付けたのと同じ扱い+α)
function ahoy(word = 'TypeScript') {
  return `Ahoy! ${word}`;
}
ahoy();

// 可変長引数
function hellooo(...args: string[]) {
  return `Hello, ${args.join(" & ")}`;
}
// Hello, TS & JSと表示される
hellooo('TS', 'JS');

// 省略可能な引数の後に省略不可な引数がきてはいけない
// function funcA(arg1?: string, arg2: string) {
//   return `Hello, ${arg1}, ${arg2}`;
// }

// 可変長引数は必ず最後じゃないといけない
// function funcB(...args: string[], rest: string) {
//   return `Hello, ${args.join(' , ')} and ${rest}`;
// }

export { }
