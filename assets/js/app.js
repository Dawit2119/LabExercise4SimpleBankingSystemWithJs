var BankAccount = {
    accountName = " ",
    accountNUmber = " ",
    balance = 0
}
(function (){
    function createAccount(accountName,accountNUmber,balance){
        BankAccount.accountName = accountName;
        BankAccount.accountNUmber = accountNUmber;
        BankAccount.balance = balance
    }
    function deposit(balance){
        BankAccount.balance += balance

    }
    function withdraw(amount){
        if(BankAccount.balance - amount > 50){
            BankAccount.balance -= amount
            return "withdrawal successful\nYour current balance is " + BankAccount.balance
        }
        else return "You havn't enough amount to withdraw considering the minimum amount to be stored in account is 50"
    }
    function balance(){
        return "Your balance now: " + BankAccount.balance
    }
    function transfer(amount, transferedAccount){
        if(BankAccount.balance - amount > 50){
            BankAccount.balance -= amount
            return " Transfer successfully complated you transferd\nyou transfered amount $" +amount + " to the account number " + accountNUmber

        } 
        else "You haven't enough balance to make transfer you inquired"
    }

})();