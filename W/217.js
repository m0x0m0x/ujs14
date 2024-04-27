"use strict";

/* 
217: Object.Create
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("217: Object.Create");

// Implemening prototypal inheritance
// Works differnt that classes

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // new method
  init(firstName, birthYear, fetish) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.fetish = fetish;
  },
};

const ste = Object.create(PersonProto);
console.log(ste);

ste.name = "Ste";
ste.birthYear = 2000;
ste.calcAge();

paraText("Checking that a new proto has been created");
console.log(ste.__proto__);

paraText("Making new person");
const ina = Object.create(PersonProto);
ina.init("ina", 1969, "boobs");
ina.calcAge();
