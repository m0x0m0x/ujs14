"use strict";

/* 
212: Prototypal inhertiance on Built-in Objects
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("212: Prototypal inhertiance on Built-in Objects");
console.log("hello");

const Person = function (firstName, birthYear, fetish) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetish = fetish;
};
const ina = new Person("ina", 2000, "scent");
const jina = new Person("jina", 1990, "panty");
console.log(ina);

Person.prototype.calcAge = function () {
  const today = new Date().getFullYear();
  console.log(today - this.birthYear);
};

console.log(Person.prototype.isPrototypeOf(ina));
console.log(Person.prototype.isPrototypeOf(jina));
console.log(Person.prototype.isPrototypeOf(Person));

subHead("Setting properties on the prototype");

Person.prototype.species = "Mistress";
console.log(ina.species, jina.species);

paraText("Checking the prototype");
console.log(ina.hasOwnProperty("firstName"));
console.log(ina.hasOwnProperty("species"));

subHead("Start Work here - Above is from 210.js");
console.log(ina.__proto__);

paraText("Moving up in the chain ");

// here we will get a null ,since going above the scope chaing

// Object Property
console.log(ina.__proto__.__proto__);
console.log(ina.__proto__.__proto__.__proto__);

paraText("Person Constructor Property");
console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

// Prototype of arrays , then fucntions

subHead("Prototype of Arrays");
const arr1 = [2, 3, 4, 5, 6]; // Short hand new Arr === []
console.log(arr1.__proto__);
console.log(arr1.concat());

console.log(arr1.__proto__ === Array.prototype);

console.log(arr1.__proto__.__proto__);

subHead("Making a new method");

// extending an object adding a new method
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(`
Testing out the new method defined above
${arr1.unique()}`);

subHead("Seeing methods on a dom element");
const h1 = document.querySelector("h1");
console.dir(h1);
console.dir((x) => x + 1);
