declare let b1: string | boolean | undefined;
declare let b2: boolean | number | undefined;
declare let c: typeof b1 | typeof b2;
declare let and: string;
declare let cond: string | number;
declare let array: (string | number | boolean)[];
export { b1, b2, c, and, cond, array };
