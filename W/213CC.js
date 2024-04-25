/* 
213: Coding Challenge
*/
// Import zone
import { mainHead, paraText } from "../UTILS/text.js";
//
mainHead("213: Coding Challenge");

// Creating the main constructor function
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Making new objects
const bmw = new Car("BMW", 120);
const merc = new Car("Marc", 95);
paraText("View New Objects Created");
console.log(bmw, merc);

// Accelerate Method
Car.prototype.acc = function () {
  this.speed += 10;
  console.log(`%c ${this.make} ➡️ ${this.speed} km/h`, "color:green");
};

// Decelerater Method
Car.prototype.dcc = function () {
  this.speed -= 5;
  console.log(`%c ${this.make} ↙️ ${this.speed} km/h`, "color:pink");
};

// Call method s
bmw.acc();
bmw.dcc();
bmw.acc();
bmw.dcc();
bmw.acc();
