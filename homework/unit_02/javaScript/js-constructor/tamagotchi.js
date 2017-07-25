console.log('tamagotchi file is loaded');

//your class declaration here

class Tamagotchi {
    constructor(name, creatureType){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
        this.name = name;
        this.creatureType = creatureType;
}
    cry() {
        this.foodInTummy--;
        console.log("WAHH!!!!");
        console.log(this.name + ' only has ' + this.foodInTummy + ' food left in its tummy');
    }
}

//create new Tamagotchis

var Frank = new Tamagotchi("Frank");
var Bill = new Tamagotchi("Bill");


//test out your Tamagotchies below via console.logs
console.log("Frank", "rollie");
console.log("Bill", "bouncy");
Frank.cry();
Bill.cry();