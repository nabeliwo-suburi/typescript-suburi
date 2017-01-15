// タプル型(Tuple Types)

// まずは今までどおりの配列から
// これは別の箇所で解説しているunion typesで表現される(number | string | boolean)[]
let array = [1, 'str', true];

// {}はcharAtを持たないので下記はコンパイルエラーになる
// array[1].charAt(0);

// tuple!明示的な型の指定が必要
let tuple: [number, string, boolean] = [1, 'str', true];

// stringはcharAt()を持つ
tuple[1].charAt(0);

// TypeScriptのtuple typesは普通にArrayでもあるのだ
tuple.forEach(v => {
  console.log(v);
});


// Genericsを使ってtupleを生成して返す
function zip<T1, T2>(v1: T1, v2: T2): [T1, T2] {
  return [v1, v2];
}
let tuple2 = zip('str', { hello(): string { return 'Hello!'; } });
tuple2[0].charAt(0); // 静的に検証される
tuple2[1].hello(); // 静的に検証される

export { array }
