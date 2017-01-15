// 型の番人(Type Guards)の続き

// 実際の型がわからないなら調べる
let obj: number | string = null as any;
if (typeof obj === 'string') {
  // ここではstringと確定されている
  obj.charAt(0);
} else {
  // ここでは消去法でnumberと確定されている
  obj.toFixed(2);
}

// 変なコードを書くとコンパイラが教えてくれる
let objA: any;
if (typeof objA === 'string') {
  // ここではstringと確定されている
  // numberにしか存在しないメソッドを呼ぶとコンパイルエラー
  // objA.toFixed(0);
}
let objB: number = 1;
if (typeof objB === 'string') {
  // 'ありえない'パターンだとnever型になり怒られる
  // objB.toFixed(0);
}

export { }
