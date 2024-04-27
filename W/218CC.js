"use strict";

/* 
218: Coding Challenge #2
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("218: Coding Challenge #2");

subHead("Earler code from 213CC.js");
/////////////////////////
// Using the earlier code

// Creating the main constructor function
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  // Accelerate Method
  acc() {
    this.speed += 10;
    console.log(`%c ${this.make} ➡️ ${this.speed} km/h`, "color:green");
  }

  // Decelerater Method
  dcc() {
    this.speed -= 5;
    console.log(`%c ${this.make} ↙️ ${this.speed} km/h`, "color:pink");
  }

  //getter func
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

subHead("Implenenting the new CC");

const ford = new CarCL("Ford", 120);
console.log(ford.speedUS);
ford.acc();
ford.dcc(0);
ford.speedUS = 50;
console.log(ford);
