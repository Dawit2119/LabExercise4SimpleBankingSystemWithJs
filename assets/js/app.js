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
    var choice = prompt("<----------Banking System---------->\n1: to create Bank Account\n2:to deposit to your account\n3:to withdraw\n4:to check your balance\n5: to transfer to beneficiary")
    switch(choice){
        case 1:{
           let accountName =  prompt("Enter your name")
           let accountNUmber = prompt("set your account number")
           let balance = parseInt(prompt("your Initial balance"))
           createAccount(accountName,accountNUmber,balance)
           alert("your account created successfuly\nAccount name: %s\nAccount number: %s\nBalance: %d",accountName,accountNUmber,balance)
        }break
        case 2:{
            let amount = parseInt(prompt("Enter how much do you want to deposit"))
            deposit(amount)
            alert("deposit successfully done\n your current balance is %d",BankAccount.balance)
        }
    }

})();