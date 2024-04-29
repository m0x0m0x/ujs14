"use strict";

/* 
219: Inheritance Between Classes: Constructor Functions
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("219: Inheritance Between Classes: Constructor Functions");

subHead("Inheriting Classes between constructor functions");
// Setting up the person function constructor

const Per1 = function (firstName, birthYear, fetish) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.fetish = fetish;
};

// Sett a calc age method on the prototype
Per1.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const jes = new Per1("jess", 2009, "spit");
jes.calcAge();

subHead("Build Construcctor Function for student");

// Student constructor function
const Stu = function (firstName, birthYear, course) {
  Per1.call(this, firstName, birthYear);
  this.course = course;
};

Stu.prototype.intro = function () {
  console.log(`I am ${this.firstName} and ${this.course}`);
};

const ina = new Stu("ina", 2000, "Fetish Course");
console.log(ina);
ina.intro(0);
