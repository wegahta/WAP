describe("sumation of Array elemnets",function(){
let expected=10;
    it("sum given arrays elements", function(){
    
        assert.equal((multiplay([1,2,3,4]),10),expected);
    });
});
describe("multiplaying of Array elements",function(){
    let expected=24;
    it("multiplay given arrays elements", function(){
    
        assert.equal((multiplay([1,2,3,4]),24),expected);
    });


});
describe("Reversing a Given String Array",function(){
    let expected='ab';
    it("reverse given arrays elements", function(){
    
        assert.equal((reverse('ba'),'ab'),expected);
    });


});
describe("filtering words by lenght",function(){
    let expected='eli';
    it("fikterwords given arrays elements", function(){
    
        assert.equal((filterwords(['bababa','eli','wegiluA','gebrehawaryat'],4),'eli'),expected);
    });


});
