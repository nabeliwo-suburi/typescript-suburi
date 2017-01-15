// 交差型(Intersection Types)

interface Storage {
  $save(): void;
}

function mixinStorage<T>(base: T): T & Storage {
  let modified = base as any;
  modified.$save = () => {
    // めんどいので保存したふり
    console.log(`データを保存しました ${JSON.stringify(base)}`);
  }

  return modified;
}

// なんの変哲もないオブジェクト
let base = {
  name: 'TypeScript'
};
// を、Storageを合成する関数に渡す
let obj = mixinStorage(base);

// baseに存在しないメソッドが呼べる！
// データを保存しました {'name':'TypeScript'}と表示される
obj.$save();

// もちろん、baseにあったプロパティにもアクセスできる
obj.name = 'JavaScript';
// データを保存しました {'name':'JavaScript'}と表示される
obj.$save();

export { }
