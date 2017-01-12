// ジェネリクス(Generic Types)

// string[]は実はArray<string>と同じ意味なのだ！(Arrayだけ特別に)
let strArray: Array<string> = ['a', 'b', 'c'];
let numArray: Array<number> = [1, 2, 3];

// ArrayのメソッドとしてforEachがある
// forEachで渡される値はそれぞれ違う(forEachは汎用的だ)
strArray.forEach(v => v.charAt(0));
numArray.forEach(v => v.toFixed(2));

// 頑張ってこうやって書いてもいいけど、めんどいよね
strArray.forEach((v: string) => v.charAt(0));
numArray.forEach((v: number) => v.toFixed(2));

// あと、間違った型を指定した時にエラーにならないとこわい…
// strArray.forEach((v: RegExp) => v.test('str'));