const shoppingList = ["Milk", "Eggs", "ham", "Bacon", "Sausage", "Frijoles"];

// Foreach
shoppingList.forEach((product, index) => {
    //console.log(`The index is ${index} and the product is ${product}`);
})

// Map
const newList = shoppingList.map(item => item + " just adding a string");
    // console.log(newList);

// Filter
const filterList = shoppingList.filter(item => item !== "Eggs");
    // console.log(filterList);



var myVar = 2;
let myLet = 2;
const myConst = 3;

function testVar() {
    var myVar = 1;
    console.log('Inside the function, myVar is: ' + myVar);
}
testVar();
console.log(myVar);

if(true) {
    var a = 1;
}

console.log(a);

if(true) {
    let b =2;
    const c = 3;
}

console.log(b,c);