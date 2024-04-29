"use strict";

/* 
221: Inheritance between classes using ES6 Classes
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("221: Inheritance between classes using ES6 Classes");

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
}

// Student class inheritance

class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    // Constructor function of the parent class

    // Declaration must be first
    super(fullName, birthYear);
    this.course = course;
  }
}
