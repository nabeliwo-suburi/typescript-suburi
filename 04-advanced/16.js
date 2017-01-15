// 多態性のあるthis型(Polymorphic 'this' Type)
"use strict";
// 自分自身を型として表す時、thisを利用する
class A {
    a() {
        return this;
    }
    d(arg) {
        return arg;
    }
    e() {
        return this;
    }
}
class B extends A {
    b() {
        console.log('B');
    }
}
class C extends A {
    c() { }
    ;
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
let c = null;
c.a().c();
