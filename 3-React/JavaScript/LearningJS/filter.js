const arr1 = [1, 3, 7, 4, 9, 15];
const arr2 = arr1.filter((n) => n < 7);
// console.log(arr2);

// const arr3 = arr1.map((n) => n * 7);
// console.log(arr3);

const animals = ["bear", "panda", "penguin", "osprey"];
// const filteredAnimals = animals.filter((animal) => animal.includes("p"));
const filteredAnimals = animals.filter((animal) => animal[0] != "p");

console.log(filteredAnimals);
