"use strict";

/* 
214: ES6 Classes
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("214: ES6 Classes");

subHead("Writing Classes");

// Class expression
// const PersonCL = class {};

//Class declaration - preferred method
class PersonCL {
  // Add constructor method
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Adding methods - will be on the prototype
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// Instance is here
const jess = new PersonCL("Jess", 1999);
console.log(jess);
//Calling method
jess.calcAge();
console.log(jess.__proto__ === PersonCL.prototype);
