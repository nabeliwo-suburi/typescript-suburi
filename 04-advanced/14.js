// 型の別名(Type Alias)
"use strict";
let c = [[1, 2], 3];
exports.c = c;
// でも、こっちのほうがTypeScriptとしては適切
var alternative;
(function (alternative) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class Circle {
        constructor(p, r) {
            this.p = p;
            this.r = r;
        }
    }
    let c2 = new Circle(new Point(1, 2), 3);
    console.log(c2.p, c2.r);
})(alternative || (alternative = {}));
exports.alternative = alternative;
