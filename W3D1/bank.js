class Bank {
    constructor() {
        this.account = [];
        this.nextNumber = 1;
    }
    addAccount() {
        this.account.push(new Account(this.nextNumber));
        return this.nextNumber++;
    }
    addSavingAccount(interset) {
        let save = new SavingAccount(interset);
        save.deposit(1000);
        if (!interest) {
            save.setInterest(interest);
        }
        this.account.push(save);
        return this.nextNumber++;


    }
    addCheckingAccount(overdraft) {
        let check = new checkingAccount(this.nextNumber);
        this.deposit(100);
        this.account.push(check);
        if (!overdraft) {
            check.setOverdraft(overdraft);
        }
        this.account.push(check);
        this.nextNumber=this.nextNumber++;


    }
closeAccount(number){
    delete this
}
}



