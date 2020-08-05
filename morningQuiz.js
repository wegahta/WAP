class Computer{
    constructore(ram,cpu,storage){
        this.ram=ram;
        this.cpu=cpu;
        this.storage=storage;
    }
    getram(){
        return this.ram;
    }
    getcpu(){
        return this.cpu;
    }
    getstorage(){
        return this.storage;
    }
    runprogram(program){
        console.log("running"+program);
    }
}
class laptop extends computer{
    constructore(battery,ram,cpu,storage){
        this.battery=battery;
        this.storage=storage;
        this.cpu=cpu;
        this.ram=ram;

    }

getbattery(){
    return this.battery;
}
getbattery(){
    return this.getbattery;
}
carrayArround(){
    console.log("carrying laptop: cpu"+this.getcpu+"ram"+this.getram+"storage"+this.getstorage+"battery"+this.getbattery);
}

}
// javaScript uses get and set methods insteade of getName() and setName() methods
// How ever if we do a missspell in the set name it means we creating a new property with the misspelling.
// The get and set methods in javaScript  don’t do enough to protect the semantic integrity of the object.