// 型アサーション(Type Assertions)の続き
// ダウンキャスト
"use strict";
class Base {
}
class InheritA extends Base {
}
class InheritB extends Base {
}
// とりあえず型は親クラスとして…
let obj = new InheritA();
// objの中身はInheritAだ！人間はそれを知っているので無理やりダウンキャスト
obj.num;
// なお、instanceofで調べると勝手に対象の型にダウンキャストされる(型のnarrowing)
// もちろん、キャストするよりこっちのやり方の方が安全
if (obj instanceof InheritA) {
    obj.num;
}
else if (obj instanceof InheritB) {
    obj.bool;
}
else {
    obj.str;
}
