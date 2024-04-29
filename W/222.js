"use strict";

/* 
222: Inhertiance between classes using - object.create
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("222: Inhertiance between classes using - object.create");

subHead("Code for studying this section");

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear, fetish) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.fetish = fetish;
  },
};

const mena = Object.create(PersonProto);
console.log(mena);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, fetish, course) {
  PersonProto.init.call(this, firstName, birthYear, fetish, course);
  this.course = course;
};
console.log(StudentProto);

const ina = Object.create(StudentProto);

StudentProto.intro = function () {
  console.log(`Is ${this.firstName} and like ${this.fetish}`);
};

const fina = Object.create(StudentProto);
fina.init("fina", 2000, "Panty", "fetishism");
fina.intro();
fina.calcAge();
console.log(fina);
