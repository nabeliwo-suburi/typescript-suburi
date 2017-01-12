// 型アサーション(Type Assertions)の続き

// こういう、型定義があるとする。実装は他のライブラリなどが与える
declare class Base {
  str: string;
}

let obj = new Base();
// 本当はBaseクラスがnumプロパティも持ってるんだけど…
// 型定義が不足しているので10秒で解決するにはanyでごまかすしかない。
// きれいごとだけじゃ世の中生きていけないんじゃよ…
// でも、本当は型定義の方を修正するのが正しいです
let num: number = (obj as any).num;

export { num }
