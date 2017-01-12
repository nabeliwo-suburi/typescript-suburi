interface A {
    str: string;
}
declare class AImpl implements A {
    str: string;
}
declare let objA: A;
interface B1 {
    str: string;
}
interface B2 extends B1 {
    num: number;
}
declare let objB: B2;
declare class FooClass {
    num: number;
    constructor(num: number);
}
interface C extends FooClass {
    str: string;
}
declare let objC: C;
