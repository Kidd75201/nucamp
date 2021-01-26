/****** 
const dragon1 = { 
    color: 'red', 
    maxHP: 1000, 
    attack: function() {
        console.log("The dragon breathes a stream of white-hot flame at you!");
    }
};

const dragon2 = { 
    color: 'blue', 
    maxHP: 1000,
    roar() {
        console.log(`The ${this.color} DRAGON roars ferociously`);
    },
    element: "water",
    swim(direction) {
        console.log(`The dragon swims away to the ${direction}.`);
    }
};

const dragon3 = { 
    color: 'black', 
    maxHP: 1000,
    roar: function() {
        console.log(`The ${this.color} DRAGON roars ferociously`);
    }
};

class Dragon {
    constructor(color, maxHP) {
        this.color = color;
        this.maxHP = maxHP;
    }
    roar() {
        console.log(`The ${this.color} dragon lets out a tremendous roar!`);
    }
}

const dragon4 = new Dragon("red", 1200);
const dragon5 = new Dragon("blue", 1000);
*****/
/**** 
class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

const dragon1 = new Dragon("dragon", "blue", "water");
const wolf1 = new Werewolf("werewolf", "gray");
*******/
/****
class Cat {
    constructor(name, color = "gray") {
        this.name = name;
        this.color = color;
    }
    meow() {
        console.log(`The ${this.color} cat named ${this.name} meows`);
    }
}

const ray = new Cat("Ray");
const jim = new Cat("yimmy", "black");
 *****/

//  OBJECT

/***
 const dragon1 = {
     // property : value
     color: "red",
     maxHP: 1000
 };

 console.log(dragon1.color);
 console.log(dragon1['maxHP']);

 const dragon2 = {
     color: "blue",
     maxHP: 1000,
     // Object method  ES6 shorthand new version
     roar() {
         console.log("The dragon roars ferociously.");
     }
 }

 console.log(dragon2.roar());
 //console.log(dragon2['maxHP']);


 const dragon3 = {
    color: "black",
    maxHP: 1000,
    // Object anonymous function method  ES5 old version
    roar: function() {
        console.log("The dragon roars ferociously.");
    }
}

console.log(dragon3.roar());
//console.log(dragon3['maxHP']);

// Add and update an object properties and methods
dragon3.element = "fire";
dragon3.color = "crimson";

dragon3.attack = function() {
    console.log("The dragon breathes a stream of white-hot flame at you!");
}
console.log(dragon3.attack());

dragon2.roar = function() {
    console.log("The dragon lets out a tremendous roar!");
}

console.log(dragon2.roar());

//  Changing individual items in array or object
const colors = ['red', 'blue', 'black'];
console.log(colors);
colors[0] = 'crimson';
colors[1] = 'turquoise';
colors[2] = 'onyx';
console.log(colors);

// Method Parameters
dragon2.element = "water";
dragon2.swim = function(dir) {
    console.log(`The dragon swims away to the ${dir}`);
}
console.log(dragon2.swim('north'));
***/
//************** */  THIS keyword

// const dragon4 = {
//     color: "red",
//     roar() {
//         console.log("The dragon lets out a tremendous roar!");
//     }
// }

// dragon4.roar = function() {
//     console.log(`The ${this.color} dragon lets out a tremendous roar!`);
// }

// const dragon5 = {
//     color: "blue",
//     roar() {
//         console.log(`The ${this.color} dragon lets out a tremendous roar!`);
//     }
// }

// class Dragon {
//     // default proporties
//     constructor(color, maxHP) {
//         this.color = color;
//         this.maxHP = maxHP;
//     }
//     roar() {
//         console.log(`The ${this.color} dragon lets out a tremendous roar!`);
//     }
// }

// const dragon1 = new Dragon("red", 1200);
// const dragon2 = new Dragon("blue", 1200);

// console.log(dragon1.roar());
// console.log(dragon2.roar());

//  class inheritence
class Monster {
    // must have constructor to store default values
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

//  Super method
class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
}

const dragon1 = new Dragon('dragon', 'red', 'fire');
console.log(dragon1.fly());


class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly`);
    }
}

const werewolf1 = new Werewolf("werewolf", "gray");
werewolf1.roar();

// Default functions Parameters

function logSum(a = 0, b = 0) {
    console.log(a + b);
}

logSum(2,3);
logSum(2);