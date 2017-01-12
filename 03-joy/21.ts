// ありえない型(The Never Type)

let str = 'TypeScript';
if (typeof str === 'number') {
  // str.toUpperCase();
}

// function test(): never {
//   // returnないし関数のおしりに到達できないので返り値の型はneverになる
//   throw new Error;
// }

// let obj: never = test();
// ここに到達することはありえん
// obj.test();

export { }
