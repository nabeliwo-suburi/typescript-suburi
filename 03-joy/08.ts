// オブジェクトリテラルで厳密なチェックが行われる場合

// ok! 変数の型に対して過不足無し
let obj: { name: string; } = {
  name: 'TypeScript'
};

// ng... 変数の型に対してプロパティが多すぎる
obj = {
  name: 'JavaScript',
  // version: '2016'
};

// オブジェクトリテラルの直接代入じゃなければok 互換性はあるのだ
let tmp = {
  name: 'JavaScript',
  version: '2016'
};
obj = tmp;

// この制約はオプション名のtypoの検出に役立つ
interface FooOptions {
  fileName?: string;
  checkBar?: boolean;
}
declare function foo(opts: FooOptions): void;

// fileNameの大文字小文字を間違えている!
foo({
  // filename: 'vvakame.txt',
  checkBar: true
});

export { }
