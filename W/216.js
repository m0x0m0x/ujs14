"use strict";

/* 
216: Static Methods
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("216: Static Methods");

console.log(Array.from(document.querySelectorAll("h1")));

subHead("Implementing own constructor first");
const Person = function (firstName, birthYear, fetishE) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetishE = fetishE;
};
const ina = new Person("ina", 2000, "panty");
console.log(ina);

Person.hey = function () {
  console.log("Hey Pussy 👅");
  console.log(this);
};

Person.hey();

subHead("Static methods inside ES6 classes");
class PersonCL {
  // Add constructor method
  constructor(fullName, birthYear, fetish) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.fetish = fetish;
  }

  // Adding methods - will be on the prototype
  // This will be added to the protoype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  // greeter function
  greeter() {
    console.log(`Lick ${this.firstName} AssAndPussy`);
  }

  // Using getter method
  get age() {
    return 2037 - this.birthYear;
  }

  // Setting a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not fullname`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("suck and fuck");
    console.log(this);
  }
}

PersonCL.hey();
