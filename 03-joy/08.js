// オブジェクトリテラルで厳密なチェックが行われる場合
"use strict";
// ok! 変数の型に対して過不足無し
let obj = {
    name: 'TypeScript'
};
// ng... 変数の型に対してプロパティが多すぎる
obj = {
    name: 'JavaScript',
};
// オブジェクトリテラルの直接代入じゃなければok 互換性はあるのだ
let tmp = {
    name: 'JavaScript',
    version: '2016'
};
obj = tmp;
// fileNameの大文字小文字を間違えている!
foo({
    // filename: 'vvakame.txt',
    checkBar: true
});
