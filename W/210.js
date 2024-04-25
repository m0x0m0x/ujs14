"use strict";

/* 
210: Prototypes 
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("210: Prototypes");
console.log("hello");

subHead("Prototypal Inheritance");

const Person = function (firstName, birthYear, fetish) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetish = fetish;
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

paraText("Prining just he protoype");
console.log(ina.__proto__);
console.log(jina.___proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(ina));
console.log(Person.prototype.isPrototypeOf(jina));
console.log(Person.prototype.isPrototypeOf(Person));

subHead("Setting properties on the prototype");

Person.prototype.species = "Mistress";
console.log(ina.species, jina.species);

paraText("Checking the prototype");
console.log(ina.hasOwnProperty("firstName"));
console.log(ina.hasOwnProperty("species"));
