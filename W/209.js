"use strict";

/* 
209: Constructor Functions and the new Operator
*/
// Import zone
import { mainHead, subHead } from "../UTILS/text.js";
// End import zone
mainHead("209: Constructor Functions and the new Operator");
console.log("hello");

////////////////////////////////////

subHead("Create new constructor function for a person");

const Person = function (firstName, birthYear, fetish) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetish = fetish;
};

const ina = new Person("Ina", 2000, "fart");
console.log(ina);

/* 
4 step happen when using the new keyword
1. New {} empty object created 
2. Function is called , 'this' keyword set to new created object
3. {} empty object is linked to a prototype 
4. function automatically returns empty object {}
*/
