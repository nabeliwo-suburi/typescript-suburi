declare let func: () => string;
declare let b: (() => string) | (() => boolean);
declare let c: {
    (): string;
} | {
    (): boolean;
};
declare let d: (() => string);
export { func, b, c, d };
