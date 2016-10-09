function hello(word: string): string {
  return 'Hello, ${word}';
}
hello("TypeScript");

// 返り値の型を省略すると返り値の型から推論される。明記した方が読みやすい場合もある
function bye(word: string) {
  return 'Bye ${word}';
}
bye("TypeScript");

// ?をつけると呼び出したときに引数が省略可能になる
function hey(word?: string) {
  // 省略可能にしたときはundefinedのときの考慮が必要
  return 'Hey, ${word || "TypeScript}';
}
hey();

// デフォルト値を指定する事もできる(?をつけたのと同じ扱い + a)
function ahoy(word = "TypeScript") {
  return 'Ahoy! ${word}';
}
ahoy();

export { }
