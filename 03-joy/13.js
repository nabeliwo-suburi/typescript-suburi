// 構造的部分型(Structual Subtyping)の続き
// 省略可能な(?がある)プロパティは値がなくてもよい
function printPoint(p) {
    let message = `x=${p.x}, y=${p.y}`;
    if (p.color) {
        message = `${p.color}(${message})`;
    }
    console.log(message);
}
// optinalなプロパティはなくても大丈夫！
// x=1, y=2と表示される
printPoint({
    x: 1,
    y: 2
});
// red(x=1, y=2)と表示される
printPoint({
    x: 1,
    y: 2,
    color: 'red'
});
// とはいえ、型が不一致だと怒られる
// printPoint({
//   x: 1,
//   y: 2,
//   color: true
// }); 
