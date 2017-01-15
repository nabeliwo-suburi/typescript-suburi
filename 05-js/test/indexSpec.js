"use strict";
const assert = require("power-assert");
const _1 = require("../lib/");
describe('lib', () => {
    describe('hello', () => {
        it('generate string with default value', () => {
            let str = _1.hello();
            assert(str === 'Hello, TypeScript');
        });
        it('generate string with parameter', () => {
            let str = _1.hello('JavaScript');
            assert(str === 'Hello, JavaScript');
        });
    });
});
