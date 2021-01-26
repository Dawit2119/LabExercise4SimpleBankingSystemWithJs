(function(){
    var BankAccount = {
        accountName :" ",
        accountNUmber:" ",
        balance : 0
    }
    function createAccount(accountName,accountNUmber,balance){
        BankAccount.accountName = accountName;
        BankAccount.accountNUmber = accountNUmber;
        BankAccount.balance = balance
        alert("your account created successfuly\nAccount name: " + accountName +"\nAccount number "+accountNUmber+"\nBalance: " + balance)
    
    }
    function deposit(balance){
        
        if(balance != 0 && BankAccount.balance <=100000){
        BankAccount.balance += balance}

    }
    function getAccountDetails(){
        if(BankAccount.balance !=0){
        return "Account name: " + BankAccount.accountName + "\nAccount number: " + BankAccount.accountNUmber + "\nBalance: " + BankAccount.balance;}
        return "no Account details"
    }
    function withdraw(amount){
        if(BankAccount.balance - amount > 50){
            BankAccount.balance -= amount
            return "withdrawal successful \n Your current balance is " + BankAccount.balance
        }
        else return "You don't have enough amount to withdraw considering the minimum amount to be stored in account is 50"
    }
    function balance(){
        if(BankAccount.accountName != " "){
        return "Your balance now: " + BankAccount.balance}
        else return "There is no Account owner.\n please create account before inquiry balance"
    }
    function transfer(amount, transferedAccount){
        if((BankAccount.balance - amount) > 50){
            BankAccount.balance = BankAccount.balance - amount
            return " Transfer successfully complated\nyou transfered amount $" +amount + " to the account number: " + transferedAccount + "\nYour current balance is " + BankAccount.balance

        } 
        else return "You haven't enough balance to make transfer you inquired"
    }
    var choice;
    function getServices(){
     choice = parseInt(prompt("<----------Banking System---------->\n0: to Exit\n1: to create Bank Account\n2:to deposit to your account\n3:to withdraw\n4:to check your balance\n5: to transfer to beneficiary\n6: to get Account details"));
    return choice;}
    getServices()
    while(choice){
    switch(choice){
        case 1:{
           if(BankAccount.accountNUmber == " ")  {
           let accountName =  prompt("Enter your name")
           let accountNUmber = prompt("set your account number")
           let balance = parseInt(prompt("your Initial balance"))
           createAccount(accountName,accountNUmber,balance)
           }
           else alert("Account number already exits\nonly one account is available in this application")
           getServices();
        };break;
        case 2:{
            if(BankAccount.balance !=0){
            let amount = parseInt(prompt("Enter how much do you want to deposit"))
            deposit(amount)
            alert("deposit successfully done\n your current balance is "+ BankAccount.balance)}
            else alert("Please set your account first.")
            getServices();
        };break;
        case 3:{
            if(BankAccount.balance !=0){
            let amount = parseInt(prompt("Enter the amount u want to withdraw"))
            alert(withdraw(amount))}
            else alert("Please set your account first")
            getServices()
        };break;
        case 4: {
            alert(balance());
            getServices();
        };break;
        case 5:{
            if(BankAccount.balance !=0){
            let accountNUmber = prompt("Enter the account number you want to transfer")
            let balance = parseInt(prompt("Enter Balance"))
            alert(transfer(balance,accountNUmber))}
            else alert("set your account first")
            getServices()
        };break;
        case 6:{
            alert(getAccountDetails())
            getServices()
        };break;
        default:{
            alert("no /wrong input is detected\nplease try again")
            getServices()
        }}

    };
})();