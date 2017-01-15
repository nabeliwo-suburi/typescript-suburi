// 型の番人(Type Guards)の続き
"use strict";
// Type Guardsの弱点
class Sample {
}
// 構造的部分型
let obj = {
    str: 'Hi!'
};
if (obj instanceof Sample) {
    // 型はSampleに絞られている　しかし、絶対に到達しない
    // 現在のobjはSampleを親に持たない
    console.log(obj.str);
}
