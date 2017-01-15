// 型の番人(Type Guards)の続き
"use strict";
// instanceofの挙動
class A {
}
class B {
}
class C {
}
let obj = null;
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
}
else {
    // ここではまだA | B
    if (obj instanceof B) {
        // ここではBと確定している
        obj.num;
    }
    else {
        // ここではAと確定している
        obj.str;
    }
}
