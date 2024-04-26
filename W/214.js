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
  constructor(firstName, birthYear, fetish) {
    this.firstName = firstName;
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
}

// Instance is here
const jess = new PersonCL("Jess", 1999, "booty");
console.log(jess);
//Calling method
jess.calcAge();
console.log(jess.__proto__ === PersonCL.prototype);

// Manual Addition
PersonCL.prototype.greet = function () {
  console.log(`👃Snifff ${this.firstName} booty 🍑`);
};

jess.greet();
jess.greeter();
