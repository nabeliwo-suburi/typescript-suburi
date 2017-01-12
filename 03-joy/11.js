// クラスに特定の実装を強制する
class AImpl {
}
let objA = new AImpl();
// 代入する値はインターフェースを実装したクラスに限らない
let objB = {
    str: 'string',
    num: 42
};
// interfaceはクラスすら拡張できる！(実装はなかったことになる)
class FooClass {
    constructor(num) {
        this.num = num;
    }
}
let objC = {
    num: 42,
    str: 'string'
};
