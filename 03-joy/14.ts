// 型アサーション(Type Assertions)
let obj: any = 1;

// お前は今後numberとして生きよ…
let num = <number>obj;

let str = 'string';
// 非常に外道なコードを書くことができる…人としての良識を疑う
// stringをnumberな型の変数に代入するだなんてなんて卑劣な…！
num = <any>str;
// 後置のキャストもあります as 型名という形式
num = str as any;

// let str2 = 'str';
// anyを経由しない場合、整合性の無い型アサーションは成功しない！安全！
// let num: number = str2 as number;

export { }
