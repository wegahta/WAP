class SavingAccount extends Account{
    constructor(number){
        this._interest=5.0;
    }
    getinterset(){
    return this._interest;
    }
    setInterset(intereset){
        this.deposit(this.getBalance()*this._interset/100);
    }
    endOfMonth(){
                
        
return "Interest added SavingsAccount:"+ this.getNumber() +" balance: "+ this.getBalance() +"interest:"+ (this.getBalance() * this._interest / 100);
        

 
    }
    toString() {
        return "Account " + this._number + ": interest " + this._interest;
    }

}