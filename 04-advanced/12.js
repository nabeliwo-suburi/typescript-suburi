// 交差型(Intersection Types)の続き
"use strict";
// 上の定義を使ってみる
var sample1;
(function (sample1) {
    let $obj = angular.resource1.$resource.create();
    $obj.str = 'test';
    let obj = $obj.$insert();
    console.log(obj.str);
})(sample1 || (sample1 = {}));
exports.sample1 = sample1;
// 上の定義を使ってみる
var sample2;
(function (sample2) {
    // 超簡単！
    let $obj = angular.resource2.$resource.create();
    $obj.str = 'test';
    let obj = $obj.$insert();
    console.log(obj.str);
})(sample2 || (sample2 = {}));
exports.sample2 = sample2;
