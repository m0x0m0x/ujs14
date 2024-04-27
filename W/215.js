"use strict";

/* 
215: Setters and Getters
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("215: Setters and Getters");

subHead("Getter and Setters");

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
