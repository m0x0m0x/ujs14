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
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetish = fetish;

  // Never create methods in constructor
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
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

subHead("use constructor function to create new objects");
const jina = new Person("Jina", 2002, "pee");
const mina = new Person("mina", 2005, "scat");
console.log(jina, mina);

// testing if its an instance
console.log(jina instanceof Person);
console.log(typeof jina);
