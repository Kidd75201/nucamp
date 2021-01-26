// Arrays
// sort()
// const arr1 = [3,4,2,1];
// console.log(arr1.sort());

// Array Methods: Map, Filter, Reduce
// map and filter both return a new array
// reduce returns a single value, not an array

// const arr1 = [5, 21, 8, 100];

// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2[i] = arr1[i] * 2;
// }
// console.log(`arr2: ${arr2}`);

// const arr3 = [];
// arr1.forEach((n, i) => {
//   arr3[i] = n * 2;
// });
// console.log(`arr3: ${arr3}`);

// const arr4 = arr1.map((n) => n * 2);
// console.log(arr4);

const desserts = [
  {
    id: 0,
    type: "cake",
    flavor: "chocolate",
    cost: 4.5,
  },
  {
    id: 1,
    type: "pie",
    flavor: "pumkin",
    cost: 3.75,
  },
  {
    id: 2,
    type: "donut",
    flavor: "chocolate",
    cost: 1.5,
  },
];

// const chocDesserts1 = desserts.filter((dessert) => flavor === "chocolate");
const chocDesserts2 = desserts.filter(
  (dessert) => dessert.flavor === "chocolate"
);
console.log(chocDesserts2);

const totalCost = desserts.reduce((total, dessert) => total + dessert.cost, 0);
console.log(totalCost);

const totalCostNoInitValue = desserts.reduce(
  (total, dessert) => total + dessert.cost
);
console.log(totalCostNoInitValue);
