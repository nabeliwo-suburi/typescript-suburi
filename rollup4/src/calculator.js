import addition from './addition';
import subtraction from './subtraction';
import multiplication from './multiplication';
import division from './division';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

console.log(React);
console.log(render);
console.log(createStore);
console.log(applyMiddleware);
console.log(combineReducers);
console.log(Provider);
console.log(Router);
console.log(IndexRoute);
console.log(browserHistory);
console.log(syncHistoryWithStore);

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
