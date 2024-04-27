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
};

const ste = Object.create(PersonProto);
console.log(ste);

ste.name = "Ste";
ste.birthYear = 2000;
ste.calcAge();
