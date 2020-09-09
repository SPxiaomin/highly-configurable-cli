// // const a = require('@/haha');

// var a = 1;
// console.log(a);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import avatar_group from './assets/avatar_group.png';

// let c: string = '1abc';
// console.log(c);

// const a: string = 1;
const a = 1;

interface temp {
  a: boolean;
}

// const ccc: temp = {
//   a: 1,
// };

// const c = () => {};

// const a = 1;

const d = { a: 1 };
console.log(d);

console.log(window.a);

// debugger;

// declare const enum Numbers {
//   Zero = 0,
//   One = 1,
// }
// console.log(Numbers.Zero + Numbers.One);

ReactDOM.render(
  // <h1>Hello, world!<img src={avatar_group} /></h1>,
  <h1 className="title">
    Hello, world! {a}
    <span className="bbb">bbb</span>
  </h1>,
  document.getElementById('root'),
);
