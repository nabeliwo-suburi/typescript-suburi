declare class SampleA<T> {
    data: T;
    constructor(data: T);
}
declare let objA: SampleA<string>;
interface SampleB<T> {
    data: T;
}
declare let objB: SampleB<number>;
declare type SampleC<T> = {
    data: T;
};
declare let objC: SampleC<number>;
export { SampleA, objA, SampleB, objB, SampleC, objC };
