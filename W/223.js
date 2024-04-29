"use strict";

/* 
223: Another Class Example
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("223: Another Class Example");

subHead("Implementing the bankist app");

// Definig Account Class
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // creating an empty array in side the class
    this.move = [];
    this.locale = navigator.language;

    //Code execution constructor
    console.log(`Fuck ${owner}`);
  }

  /////// Public Interface
  // Thse methods are what forms the API

  // Deposit Method
  deposit(val) {
    this.move.push(val);
  }

  // Withdraw Method - calling a method inside this function
  withdraw(val) {
    this.deposit(-val);
  }
  /////////////////////
}

// Making the account from tehe class above
const acc1 = new Account("ina", "EUR", 1111);
console.log(acc1);
console.dir(acc1);
console.table(acc1);

//Deposit
// acc1.move.push(200);
acc1.deposit(250);

//Withdraw
// acc1.move.push(-100);
acc1.withdraw(140);
