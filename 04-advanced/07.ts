// 型の番人(Type Guards)の続き

// instanceofの挙動
class A {
  str: string;
}
class B {
  num: number;
}
class C {
  bool: boolean;
}

let obj: A | B | C = null as any;
if (obj instanceof A) {
  // ここではA(含むC)と確定している
  obj.str;
  if (obj instanceof C) {
    obj.bool;
  }
}

if (obj instanceof C) {
  // ここではCと確定している
  obj.bool;
} else {
  // ここではまだA | B
  if (obj instanceof B) {
    // ここではBと確定している
    obj.num;
  } else {
    // ここではAと確定している
    obj.str;
  }
}

export { }
