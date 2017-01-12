declare namespace a {
    interface Hello {
        hello(word?: string): string;
    }
    let obj: Hello;
}
declare namespace a {
    function bye(word?: string): string;
}
declare namespace b {
    namespace c {
        function hello(): string;
    }
}
declare namespace d.e {
    function hello(): string;
}
