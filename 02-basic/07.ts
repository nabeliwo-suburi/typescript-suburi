// namespace(内部モジュール)

namespace a {
  // exportしてないものは外部からは見えない
  class Sample {
    hello(word = 'TypeScript') {
      return `Hello, ${word}`;
    }
  }

  export interface Hello {
    hello(word?: string): string;
  }
  export let obj: Hello = new Sample();
}

namespace a {
  export function bye(word = 'JavaScript') {
    return `Bye, ${word}`;
  }

  // 定義を分けてしまうと同名のモジュールでもexportされていないものは見えない
  // let tmp = new Sample();
}

namespace b {
  export namespace c {
    export function hello() {
      return a.obj.hello();
    }
  }
}

namespace d.e {
  export function hello() {
    return a.obj.hello();
  }
}

// Hello, TypeScriptと表示される
console.log(b.c.hello());
// Hello, JavaScriptと表示される
console.log(d.e.hello());
