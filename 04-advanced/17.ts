// 関数のthisの型の指定(Specifying This Types For Functions)

// 関数内部でのthisの型を偽の第一引数で指定
function testA(this: string) {
  console.log(this.toUpperCase());
}

// こういう利用を想定しているはず
// TYPESCRIPTと表示される
testA.bind('TypeScript')();

// 普通に呼び出すとエラーになる
// testA();

// 1つめの仮引数がthisの型指定だった場合、それは偽物の仮引数
// 実際に何かを渡すとエラーになってしまう
// testA('TypeScript');

function testB() {
  // --noImplicitThisオプション利用時、関数内でthisにアクセスすると怒られる
  // console.log(this.toUpperCase());
}

function testC(this: string, postfix: string) {
  console.log(`${this.toUpperCase()}${postfix}`);
}
// TYPESCRIPT!と表示される
testC.bind('TypeScript')('!');


// thisの値が差し替えられるAPIに対応

// lib.dom.d.tsから抜粋
// listenerの仮引数の先頭が偽の仮引数で、thisの型の指定が行われている
interface HTMLBodyElement extends HTMLElement {
  addEventListener(
    type: 'click',
    listener: (this: this, ev: MouseEvent) => any,
    useCapture?: boolean): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean): void;
}

let el1: HTMLBodyElement = null as any;
el1.addEventListener('click', function() {
  // thisの型はHTMLBodyElement
  this.innerText = 'Hi!';
});
el1.addEventListener('click', () => {
  // アロー関数の場合thisの値は変えられない
  // this.innerText = 'Hi!';
});

let el2: HTMLDivElement = null as any;
el2.addEventListener('click', function() {
  // thisの型はHTMLDivElement
  this.innerText = 'Hi!';
});

export { testB }
