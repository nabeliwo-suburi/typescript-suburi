// オブジェクトリテラルで値を作成！
let objA = {
  x: 1,
  y: 2
};

// オブジェクト型リテラルで型を作成！(値は無し)
// 上記のobjAの型は型推論でobjBと同一になる
let objB: {
  x: number;
  y: number;
}
objB = { x: 1, y: 2 };

// おんなじ！
objA = objB;
objB = objA;

// 関数の仮引数や返り値に対して
function move(
  value: { x: number; y: number; },
  delta: { dx?: number; dy?: number; }
): { x: number; y: number; } {
  if (delta.dx) {
    value.x += delta.dx;
  }
  if (delta.dy) {
    value.y += delta.dy;
  }
  return value;
}

let result = move({ x: 1, y: 2}, { dx: -2 });
// 次のように表示される
// {
//   "x": -1,
//   "y": 2
// }
console.log(JSON.stringify(result, null, 2));

 export {}
