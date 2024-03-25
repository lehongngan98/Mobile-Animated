"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = /** @class */ (function () {
    function Account(accountNumber, name, balance) {
        this.Rate = 0.035;
        if (accountNumber !== undefined && name !== undefined) {
            this.accountNumber = accountNumber;
            this.name = name;
            if (balance !== undefined) {
                this.balance = balance;
            }
            else {
                this.balance = 50000;
            }
        }
        else {
            this.accountNumber = 999999;
            this.name = 'chua xac dinh';
            this.balance = 50000;
        }
    }
    Account.prototype.setAccountNumber = function (accountNumber) {
        if (accountNumber > 0) {
            this.accountNumber = accountNumber;
        }
        else {
            throw new Error("Account number > 0");
        }
    };
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.setName = function (name) {
        if (name !== undefined) {
            this.name = name;
        }
        else {
            throw new Error("Name number not null");
        }
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.setBalance = function (balance) {
        if (balance >= 50000) {
            this.balance = balance;
        }
        else {
            throw new Error("Balance >= 50000");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.withdraw = function (ammount, fee) {
        if ((ammount > 0) && ((ammount + fee) <= this.balance)) {
            this.balance = this.balance - (ammount + fee);
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * this.Rate);
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (this.balance > amount) {
            this.balance = this.balance - amount;
            acc2.setBalance(acc2.getBalance() + amount);
            return true;
        }
        else {
            return false;
        }
    };
    Account.prototype.toString = function () {
        return "accountNumber: ".concat(this.accountNumber, ", name: ").concat(this.name, ", balance: ").concat(this.balance);
    };
    return Account;
}());
exports.default = Account;
