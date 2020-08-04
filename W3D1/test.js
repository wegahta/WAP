describe("Account Test", function(){
    let acc=new Account(1);
    
   
    it("Testing getNumber of Account", function(){
        assert.equal(100, new Account(100).getNumber());
    });

    it("Testing deposit of Account ", function(){
        acc.deposit(300);
        assert.equal(300, acc.getBalance());
        
    });

    it("Testing with draw and getBalance of Account", function(){
        acc.withdraw(100);
        assert.equal(200, acc.getBalance());
        
    });
        
});








describe("Saving Account Test", function(){

    let saving=new Savingsaccount(2);

    it("Testing getInterest of SavingAccount", function(){
        assert.equal(5, saving.getInterest());
    });

    it("Testing setInterest of SavingAccount", function(){
        saving.setInterest(7);
        assert.equal(7, saving.getInterest());
    });

    it("Testing addInterest of SavingAccount", function(){
        saving.deposit(250);
        saving.addInterest();

        assert.equal(267.5, saving.getBalance());
    });

    it("Testing endOfMonth of SavingAccount", function(){
        assert.equal("Interest added SavingsAccount:"+ saving.getNumber() +" balance: "+ saving.getBalance() +"interest:"+ (saving.getBalance() * saving._interest / 100),saving.endOfMonth());
    });
})




