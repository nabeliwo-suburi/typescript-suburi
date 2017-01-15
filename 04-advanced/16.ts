// 多態性のあるthis型(Polymorphic 'this' Type)

// 自分自身を型として表す時、thisを利用する
class A {
  _this: this;
  a(): this {
    return this;
  }

  d(arg: this): this {
    return arg;
  }

  e() { // thisをreturnした場合暗黙的に返り値もthisとなる
    return this;
  }
}

class B extends A {
  b() {
    console.log('B');
  }
}

class C extends A {
  c(): void {};
}

// a()はクラスAのメソッドだが返り値の型はB自身だ
new B().a().e().b();

// d()もクラスAのメソッドだが引数はBでなければならぬ
new B().d(new B()).b();

// d()はクラスAのメソッドだが、Bに生えている限りAを渡したら怒られてしまう
// new B().d(new A()).b();

// プロパティについても同様にB自身になる
new B()._this.b();

// インターフェースでもok C自身になる
let c: C = null as any;
c.a().c();

export { }
