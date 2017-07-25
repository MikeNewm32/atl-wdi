console.log('tamagotchi file is loaded');

//your class declaration here

class Tamagotchi {
    constructor(){
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
}
    cry() {
        this.foodInTummy--;
        console.log("WAHH!!!!")
        console.log('Tamagotchi omly has ' + this.foodInTummy + ' food in its tummy');
    }
}

//create new Tamagotchis

var tamogotchiNum1 = new Tamagotchi();
var tamogotchiNum2 = new Tamagotchi();


//test out your Tamagotchies below via console.logs
console.log(tamogotchiNum1);
console.log(tamogotchiNum2);
tamogotchiNum1.cry();
tamogotchiNum2.cry();