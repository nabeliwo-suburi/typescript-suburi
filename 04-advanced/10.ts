// 型の番人(Type Guards)の続き

// Type Guardsの弱点
class Sample {
  str: string;
}

// 構造的部分型
let obj: Sample = {
  str: 'Hi!'
};

if (obj instanceof Sample) {
  // 型はSampleに絞られている　しかし、絶対に到達しない
  // 現在のobjはSampleを親に持たない
  console.log(obj.str);
}

// class Sample1 {
//   str: String;
//   private _tmp: any;
// }

// privateなインスタンス変数があるクラスのインスタンスは偽造できない
// let obj1: Sample1 = {
//   str: 'Hi!',
//   _tmp: null
// };

export { }
