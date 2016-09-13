import addition from './addition';
import subtraction from './subtraction';
import multiplication from './multiplication';
import division from './division';

export default class Calculator {
  constructor(a) {
    this.setValue(a);
  }

  setValue(a) {
    this.a = a;
  }

  getValue() {
    return this.a;
  }

  addition(b) {
    this.a = addition(this.a, b);
  }

  subtraction(b) {
    this.a = subtraction(this.a, b);
  }

  multiplication(b) {
    this.a = multiplication(this.a, b);
  }

  division(b) {
    this.a = division(this.a, b);
  }
}
