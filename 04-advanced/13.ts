// 文字列リテラル型(String Literal Types)

// '文字列'が型。値ではない
let suit: 'Heart' | 'Diamond' | 'Club' | 'Spade';

// ok
suit = 'Heart';
// NG suitの型に含まれていない
// suit = 'Joker';


// イベント名によって型が変わる

// lib.dom.d.tsから抜粋
// 第一引数で指定するイベントによってリスナーで得られるイベントの型が違う
// interface HTMLBodyElement extends HTMLElement {
//   addEventListener(
//     type: 'change',
//     listener: (this: this, ev: Event) => any,
//     useCapture?: boolean): void;
//   addEventListener(
//     type: 'click',
//     listener: (this: this, ev: MouseEvent) => any,
//     useCapture?: boolean): void;
//   addEventListener(
//     type: 'keypress',
//     listener: (this: this, ev: KeyboardEvent) => any,
//     useCapture?: boolean): void;
//   addEventListener(
//     type: string,
//     listener: EventListenerOrEventListenerObject,
//     useCapture?: boolean): void;
// }


// 足し算
interface Add {
  type: 'add';
  left: Tree;
  right: Tree;
}
// 末端の値
interface Leaf {
  type: 'leaf';
  value: number;
}

type Tree = Add | Leaf;

// (10 + 3) + 5を表現する
let node: Tree = {
  type: 'add',
  left: {
    type: 'add',
    left: { type: 'leaf', value: 10 },
    right: { type: 'leaf', value: 3 }
  },
  right: {
    type: 'leaf',
    value: 5
  },
};

// 18と表示される
console.log(calc(node));

function calc(root: Tree): number {
  // プロパティの値で型の絞り込みができる！
  switch (root.type) {
    case 'leaf':
      // 型はLeafで決定
      return root.value;
    case 'add':
      // 型はAddで決定！
      return calc(root.left) + calc(root.right);
    default:
      throw new Error('unknown node');
  }
}

export { }
