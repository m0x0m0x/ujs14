"use strict";

/* 
220 Coding Challenge 3
- This is implementing he inhertiance manually based on the last chapter
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("220:Coding Challenge 3");

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chaBat = function (chaTo) {
  this.charge = chaTo;
};

EV.prototype.acc = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `%c ${this.make} ➡️ ${this.speed} km/h with 🪫${this.charge}`,
    "color:green"
  );
};

const tezl = new EV("Tez", 129, 23);
console.log(tezl);

tezl.chaBat(90);
console.log(tezl);

tezl.dcc();
tezl.acc(0);
