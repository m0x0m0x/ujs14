"use strict";

/* 
215: Setters and Getters
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("215: Setters and Getters");

subHead("Getter and Setters");

// Class which is will be used below
//Class declaration - preferred method
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

// using bankist data
const acc1 = {
  own: "ina",
  move: [200, 69, 89],

  // adding getter
  get latest() {
    return this.move.slice(-1).pop();
  },

  // setter method needs one parameter
  set latest(mov) {
    this.move.push(mov);
  },
};

// Written as a property
console.log(acc1.latest);

// Using a setter
acc1.latest = 50;

// Printing the whole array here
console.log(acc1.move);

// Insantiate one person first
paraText("Getter on Person class");
const jess = new PersonCL("jess nito", 2001, "fart");
jess.calcAge();
console.log(jess.age);
console.log(jess);
const fina = new PersonCL("Fina Gina", 1999);
console.log(fina);
