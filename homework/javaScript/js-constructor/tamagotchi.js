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
    };
    puke() {
        this.foodInTummy--;
        console.log("UGGHHh I'm gonna be sick!");
        console.log(this.name + ' only has ' + this.foodInTummy + ' food left in its tummy!');
    };
    yawn() {
        this.restedness--;
        console.log("Sooooooo sleepy!ZZZZ")
        console.log(this.name + " has current restedness of: " + this.restedness);
    };
    start() {
        console.log(this.name + ' has started!');
        this.hungerTimer = setInterval(function() {
            Frank.cry();
        }, 6000);
        this.yawnTimer = setInterval(function() {
            Frank.puke();
        }, 10000);
        this.sickTimer = setInterval(function() {
            Frank.yawn();
        }, 20000);
    };
    stop(){
        console.log(this.name + " has stopped");
        clearInterval(this.hungerTimer);
        clearInterval(this.yawnTimer);
        clearInterval(this.sickTimer);
    };
}


//create new Tamagotchis

var Frank = new Tamagotchi("Frank", "rollie");
var Bill = new Tamagotchi("Bill", "bouncy");


//test out your Tamagotchies below via console.logs
console.log("Frank");
console.log("Bill");
Frank.start();
Frank.stop();