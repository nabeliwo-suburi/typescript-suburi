class Base {
  greeting(name: string) {
    return 'Hi! ' + name;
  }
}

class Inherit extends Base {
  greeting(name: string) {
    return super.greeting(name) + '. How are yout?';
  }
}

let obj = new Inherit();
console.log(obj.greeting('TypeScript'));

export { }
