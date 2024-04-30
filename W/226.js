"use strict";

/* 
226: Chaining Methods
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("226: Chaining Methods ");

//// Using the code from 225.js
class Account {
  //1. Publc Fields (instances)
  locale = navigator.language;

  // 2. Private Fields - This makes it
  #move = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // creating an empty array in side the class
    // this._move = [];
    // this.locale = navigator.language;

    //Code execution constructor
    console.log(`Fuck ${owner}`);
  }

  /////// Public Interface are public methods

  //Public method here
  getMovements() {
    return this.#move;
  }

  // Thse methods are what forms the API

  // Deposit Method
  deposit(val) {
    this.#move.push(val);
    return this;
  }

  // Withdraw Method - calling a method inside this function
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // Request Loan
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(
        `LoanBastard Approved - $${new Intl.NumberFormat("en-US").format(val)}`
      );
      return this;
    }
  }

  // Private Methods - Hide implementatin details from outside
  // Approve Loan
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log("HelperPuss");
  }

  /////////////////////
}

subHead("Discussed methods ");
paraText(`
  ----
  There r 8 methods but only 4 focusssed here
  1. Public Fields 
  2. Private Fields
  3. Public Methods
  4. Private Methods
  
  There is also a static method
  ----
  `);

subHead(`
  Public Fields - Properties on all instances or Public Instance Fields
  `);

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

// Accessing a pin
// console.log(acc1.pin);

// // requesting loan
// acc1.requestLoan(3000000);
// acc1.approveLoan(100);

// Testing printing the private class field
// console.log(acc1.#move);
console.log(acc1.getMovements());
// console.log(acc1.#approveL+oan(200));

Account.helper();

////////////////// Actual 226.js work
subHead("Actual Work from 226.js");

// Chaining
console.log(acc1);
acc1.deposit(300).deposit(500).withdraw(100).requestLoan(10000).withdraw(500);
console.log(acc1.getMovements());
