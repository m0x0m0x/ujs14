"use strict";

/* 
228: Coding Challenge 4
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("228: Coding Challenge 4 ");

///// Data reuse from 220CC.js
// Using the car classs
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

// Solution

// Make an EV Class
class EVCl extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chaBat = function (chaTo) {
    this.#charge = chaTo;
  };

  // If this was not defined , it would inherit the acc from parent class
  // Accoring to the prototype chain
  acc = function () {
    this.speed += 20;
    this.#charge--;
    console.log(
      `%c ${this.make} ➡️ ${this.speed} km/h with 🪫${this.#charge}`,
      "color:green"
    );
  };
}

/////////// Actual work for 228.js

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);

// Testing the private #charge
// console.log(rivian.#charge);
