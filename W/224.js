"use strict";

/* 
224: Encapsulation: Protected properties an Methods
*/
// Import zone
import { mainHead, paraText, subHead } from "../UTILS/text.js";
// End import zone
mainHead("224: Encapsulation: Protected properties an Methods");

subHead("Implementing the bankist app");
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    // creating an empty array in side the class
    this._move = [];
    this.locale = navigator.language;

    //Code execution constructor
    console.log(`Fuck ${owner}`);
  }

  /////// Public Interface

  //Public method here
  getMovements() {
    return this._move;
  }

  // Thse methods are what forms the API

  // Deposit Method
  deposit(val) {
    this._move.push(val);
  }

  // Withdraw Method - calling a method inside this function
  withdraw(val) {
    this.deposit(-val);
  }

  // Approve Loan
  _approveLoan(val) {
    return true;
  }

  // Request Loan
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(
        `LoanBastard Approved - $${new Intl.NumberFormat("en-US").format(val)}`
      );
    }
  }
  /////////////////////
}
