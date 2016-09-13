(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Calculator = factory());
}(this, (function () { 'use strict';

function addition(a, b) {
  return a + b;
};

function subtraction(a, b) {
  return a - b;
};

function multiplication(a, b) {
  return a * b;
};

function division(a, b) {
  return a / b;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Calculator = function () {
  function Calculator(a) {
    classCallCheck(this, Calculator);

    this.setValue(a);
  }

  createClass(Calculator, [{
    key: 'setValue',
    value: function setValue(a) {
      this.a = a;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.a;
    }
  }, {
    key: 'addition',
    value: function addition$$(b) {
      this.a = addition(this.a, b);
    }
  }, {
    key: 'subtraction',
    value: function subtraction$$(b) {
      this.a = subtraction(this.a, b);
    }
  }, {
    key: 'multiplication',
    value: function multiplication$$(b) {
      this.a = multiplication(this.a, b);
    }
  }, {
    key: 'division',
    value: function division$$(b) {
      this.a = division(this.a, b);
    }
  }]);
  return Calculator;
}();

return Calculator;

})));