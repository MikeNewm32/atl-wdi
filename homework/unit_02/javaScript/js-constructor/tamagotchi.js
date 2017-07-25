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
        console.log(this.name + ' only has ' + this.foodInTummy + ' food left in its tummy!');
    }
    puke() {
        this.foodInTummy--;
        console.log("UGGHHh I'm gonna be sick!");
        console.log(this.name + ' only has ' + this.foodInTummy + ' food left in its tummy!');
    }
    yawn() {
        this.restedness--;
        console.log(this.name + " has current restedness of: " + this.restedness);
    }
}


//create new Tamagotchis

var Frank = new Tamagotchi("Frank", "rollie");
var Bill = new Tamagotchi("Bill", "bouncy");


//test out your Tamagotchies below via console.logs
console.log("Frank");
console.log("Bill");
Frank.cry();
Bill.cry();
Frank.puke();
Bill.puke();
Frank.yawn();
Bill.yawn();