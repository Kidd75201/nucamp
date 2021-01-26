const dragon1 = { 
    color: 'red', 
    maxHP: 1000
};

const dragon2 = { 
    color: 'blue', 
    maxHP: 1000,
    roar() {
        console.log("The BLUE DRAGON roars ferociously");;
    }
};

const dragon3 = { 
    color: 'black', 
    maxHP: 1000,
    roar: function() {
        console.log("The BLACK DRAGON roars ferociously");;
    }
};

dragon1.attack = function() {
    console.log("The dragon breathes a stream of white-hot flame at you!");
}

dragon2.element = "water";
dragon2.swim = function(direction) {
    console.log(`The dragon swims away to the ${direction}.`);
}