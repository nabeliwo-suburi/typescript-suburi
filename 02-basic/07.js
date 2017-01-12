// namespace(内部モジュール)
var a;
(function (a) {
    // exportしてないものは外部からは見えない
    class Sample {
        hello(word = 'TypeScript') {
            return `Hello, ${word}`;
        }
    }
    a.obj = new Sample();
})(a || (a = {}));
(function (a) {
    function bye(word = 'JavaScript') {
        return `Bye, ${word}`;
    }
    a.bye = bye;
    // 定義を分けてしまうと同名のモジュールでもexportされていないものは見えない
    // let tmp = new Sample();
})(a || (a = {}));
var b;
(function (b) {
    var c;
    (function (c) {
        function hello() {
            return a.obj.hello();
        }
        c.hello = hello;
    })(c = b.c || (b.c = {}));
})(b || (b = {}));
var d;
(function (d) {
    var e;
    (function (e) {
        function hello() {
            return a.obj.hello();
        }
        e.hello = hello;
    })(e = d.e || (d.e = {}));
})(d || (d = {}));
// Hello, TypeScriptと表示される
console.log(b.c.hello());
// Hello, JavaScriptと表示される
console.log(d.e.hello());
