// さまざまなクラス要素
"use strict";
class Base {
    // コンストラクタ
    // 引数プロパティ宣言(parameter property declaration)
    // 引数にアクセス修飾子をあわせて書くとインスタンス変数としてその値が利用可能になる
    constructor(boolA, boolB, boolC, boolD) {
        this.boolB = boolB;
        this.boolC = boolC;
        this.boolD = boolD;
        this.strA = "string";
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
        // 省略可能なプロパティは値の存在チェックが必要です
        if (this.regexpA != null) {
            this.regexpA.test('Hi1');
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
// obj.numC: // private   なメンバにはアクセスできない
// obj.numD: // protected なメンバにもアクセスできない
obj.boolB;
// obj.boolC; // private   なメンバにはアクセスできない
// obj.boolD; // protected なメンバにもアクセスできない
obj.hello('TypeScript');
obj.dateA = new Date();
obj.dateA;
