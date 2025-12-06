
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// 8. Menu-Based ATM System
// Description: Handle options for balance, withdraw, deposit, exit.
// Example: "100 withdrawn successfully"

export class ATM {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    checkBalance() {
        return `Your current balance is $${this.balance}`;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return 'Insufficient money';
        } else {
            this.balance -= amount;
            return `$${amount} withdrawn successfully`;
        }
    }
    deposit(amount) {
        this.balance += amount;
        return `$${amount} deposited successfully`;
    }
    exit() {
        return 'Thank you for using the ATM';
    }
}








