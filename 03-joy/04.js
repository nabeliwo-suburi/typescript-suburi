"use strict";
// オブジェクト型リテラルで使える書き方３：コンストラクトシグニチャ(Construct Signatures)
let clazz;
// 当てはめるとこんな感じ
class Sample {
}
clazz = Sample;
let obj = new clazz();
// クラス式だとこんな感じ
clazz = class {
};
obj = new clazz();
