"use strict";
class Base {
    // コンストラクタ
    constructor(boolA, boolB, boolC, boolD) {
        this.boolB = boolB;
        this.boolC = boolC;
        this.boolD = boolD;
        this.strA = 'string';
        // エラー消し 一回も使われない可能性があると怒られる
        console.log(boolA, this.numC, this.boolC, Base.numC);
    }
    // メソッド
    hello(word) {
        return 'Hello, ' + word;
    }
    get dateA() {
        return this._date;
    }
    set dateA(value) {
        this._date = value;
    }
    optional() {
        // 省略可能なプロパティはあたいの存在チェックが必要です
        if (this.regexpA != null) {
            this.regexpA.test('Hi!');
        }
        if (Base.regexpA != null) {
            Base.regexpA.test('Hi!');
        }
    }
}
let obj = new Base(true, false, true, false);
obj.numA;
obj.strA;
obj.numB;
// obj.numC; // privateなメンバにはアクセスできない
// obj.numD; // protectedなメンバにもアクセスできない
obj.boolB;
// obj.boolC; // privateなメンバにはアクセスできない
// obj.boolD; // protectedなメンバにもアクセスできない
obj.hello('TypeScript');
obj.dateA = new Date();
obj.dateA;
