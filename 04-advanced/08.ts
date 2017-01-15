// 型の番人(Type Guards)の続き

// ユーザ定義のType Guards
class Sample {
  str: string;
}

// 構造的部分型
let obj: Sample = {
  str: 'Hi!'
};

// 独自にSample型であることの判定を実装する
function isSample(s: Sample): s is Sample {
  if (!s) {
    return false;
  }
  // とりあえずstrプロパティがあって値がstringなら
  // Sample型に互換性あり！という基準にする
  return typeof s.str === 'string';
}

if (isSample(obj)) {
  console.log(obj.str);
}


// isの左辺にthisを使う
abstract class Node {
  isStringNode(): this is StringNode {
    return this instanceof StringNode;
  }
  isNumberNode(): this is NumberNode {
    return this instanceof NumberNode;
  }
}

class StringNode extends Node {
  constructor(public text: string) {
    super();
  }
}

class NumberNode extends Node {
  constructor(public value: number) {
    super();
  }
}

let nodes: Node[] = [new StringNode('TypeScript'), new NumberNode(8)];
// TypeScriptと8と表示される
nodes.forEach(n => {
  if (n.isStringNode()) {
    // n is StringNode
    console.log(n.text);
  } else if (n.isNumberNode()) {
    // n is NumberNode
    console.log(n.value);
    
  }
});

export { }
