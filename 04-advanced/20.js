// タプル型(Tuple Types)
"use strict";
// まずは今までどおりの配列から
// これは別の箇所で解説しているunion typesで表現される(number | string | boolean)[]
let array = [1, 'str', true];
exports.array = array;
// {}はcharAtを持たないので下記はコンパイルエラーになる
// array[1].charAt(0);
// tuple!明示的な型の指定が必要
let tuple = [1, 'str', true];
// stringはcharAt()を持つ
tuple[1].charAt(0);
// TypeScriptのtuple typesは普通にArrayでもあるのだ
tuple.forEach(v => {
    console.log(v);
});
// Genericsを使ってtupleを生成して返す
function zip(v1, v2) {
    return [v1, v2];
}
let tuple2 = zip('str', { hello() { return 'Hello!'; } });
tuple2[0].charAt(0); // 静的に検証される
tuple2[1].hello(); // 静的に検証される
