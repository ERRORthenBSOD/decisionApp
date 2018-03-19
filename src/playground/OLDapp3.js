// // import './utils.js';
// import anythingIWant, {square, add } from "./utils";
// import пенсионерТыИлиНет, {isAdult, canDrink} from "./person";
//
// console.log("App is RUNNING!!!");
//
// console.log(square(4));
// console.log(add(3, 5));
//
// console.log(anythingIWant(10, 7));
//
//
// console.log(isAdult(18));
// console.log(canDrink(21));
// console.log(пенсионерТыИлиНет(60));

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';


const templateOld = React.createElement('p',{}, "testing123"); // <p>testing 123</p>;

// const template = <p>THIS IS ES 6 wtf!!!!!!</p>;
const template = <h1>THIS IS ES 6!</h1>;

ReactDOM.render(template, document.getElementById('app'));

console.log(validator.isEmail('test@gmail.com'));