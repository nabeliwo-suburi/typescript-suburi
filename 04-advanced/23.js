// 非null指定演算子(Non-null Assertion Operator)の続き
"use strict";
let config = {
    verbose: true
};
// filledの型は{ } & ConfigFixed & Config
// assignの定義が引数4つまではintersection typesで定義されているため
// assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;が実際の定義
let defaultConfig = { filePath: 'setting.json', verbose: false };
let filled = Object.assign({}, defaultConfig, config);
// ConfigとConfigFixedには直接の互換性はない
// let fixed: ConfigFixed = config;
// filledはfilePathとverboseが存在することが確定しているのでConfigFixedと互換性がある
let fixed = filled;
exports.fixed = fixed;
console.log(fixed);
