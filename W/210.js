"use strict";

/* 
210: Prototypes 
*/
// Import zone
import { mainHead, subHead } from "../UTILS/text.js";
// End import zone
mainHead("210: Prototypes");
console.log("hello");

subHead("Prototypal Inheritance");

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

const ina = new Person("ina", 2000, "scent");
const jina = new Person("jina", 1990, "panty");
console.log(ina);

//Protoype

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  const today = new Date().getFullYear();
  console.log(today - this.birthYear);
};

ina.calcAge();
jina.calcAge();
