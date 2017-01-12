// 関数型リテラル(Function Type Literals)
let func;
// 当てはまる値はこんな感じ
func = word => `Hello ${word}`;
func = (word) => {
    return `Hello, ${word}`;
};
func = function (word) {
    return `Hello, ${word}`;
};
// 型に対して実装の引数が少ないのはok
func = () => `Hello, TypeScript`;
// 型に対しての実装の引数の数が多い場合、省略可能かデフォルト値付きでなければならない
func = (v1, v2 = 'JavaScript') => `Hello, ${v1} ${v2}`;
