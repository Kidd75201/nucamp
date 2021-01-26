// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//     arr2 = arr1; 
//     arr1[0] = 'potato'
// })();
// console.log(arr2);

/********************************************************* */

// var voxel = {x: 3.6, y: 7.4, z: 6.54 };

// var x = voxel.x; // x = 3.6
// var y = voxel.y; // y = 7.4
// var z = voxel.z; // z = 6.54

// const { x : a, y:b, z:c } = voxel; // a = 3.6, b=7.4 c=6.54

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures){
//     "use strict";
//     // change code below this line
//     const { tomorrow : tempOfTomorrow, today : tempOfToday } = avgTemperatures; // change this line
//     // change code above this line
//     return tempOfTomorrow, tempOfToday;
// }


// console.log(getTempOfTmrw(AVG_TEMPERATURES));

/********************************************************* */

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
// };

// function getMaxOfTmrow(forecast) {
//     "use strict";

//     const {tomorrow: {max: maxOfTomorrow}} = forecast;

//     return maxOfTomorrow;
// }

// console.log(getMaxOfTmrow(LOCAL_FORECAST));

// const LOCAL_TRAFFIC = {
//     today: {mor: "heavy", after: "light"},
//     tomorrow: {mor: "light", after: "heavy"}
// };

// function getAfterTraffic(traffic) {
//     "use strict"

//     const {tomorrow: {after: trafficReq}} = traffic;

//     return trafficReq;
// };

// console.log(getAfterTraffic(LOCAL_TRAFFIC));

/********************************************************* */

// const [z, x, , y] = [1,2,3,4,5,6];
// console.log(z, x, y);

// let a = 8, b = 6;
// (() => {
//     "use strict";
//     [a, b] = [b, a];
// })();

// console.log(a);
// console.log(b);

/********************************************************* */

// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//     const [ , , ...arr] = list;

//     return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

/********************************************************* */

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// };

// const half = (function() {
//     return function half({max, min}) {
//         return(max + min) / 2.0;
//     };
// })();

// console.log(stats);
// console.log(half(stats));

/********************************************************* */

// const person = {
//     name: "Zodiac Hasbro",
//     age: 56
// };

// // Template literal with multi-line and string interpolation
// const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;

// console.log(greeting);

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
// };

// function makeList(arr) {
//     const resultDisplayArray = []
    
//     for(let i = 0; i < arr.length; i++) {
//         resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//     }

//     return resultDisplayArray;
// }

// /**
//  *  makeList(sult.failure) should return;
//  *  [ `<li class="text-warning">no-var</li>`,
//  *    `<li class="text-warning">var-on-top</li>`
//  *    `<li class="text-warning">linebreak</li>` * 
//  * ] 
//  */

//  const resultDisplayArray = makeList(result.failure);

// console.log(resultDisplayArray);

/********************************************************* */

// const createPerson = (name, age1, gender, city) => ({ name, age1, gender, city });
// console.log(createPerson("Zodiac Hasbro", 56, "male", "Dallas"));

/********************************************************* */

// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//         "use strict";
//         this.gear = newGear;
//     }
// };

// bicycle.setGear(3);
// console.log(bicycle.gear);

/********************************************************* */

/* 
    JavaScript Practice Exercises for begginners.

*/

/********************************************************* */

/* Exercise 1:

  Write a JavaScript program to check two numbers and return true if one of the number is
  100 or if the sum of the two numbers is 100.
*/
/* my attempt working
var num1 = 98;
var num2 = 50;

if(num1 == 100 || num2 == 100 || num1 + num2 == 100){
    console.log(`num1: ${num1} and num2: ${num2} are equal to 100`);
} else {
    console.log(`Neither num1: ${num1} and num2: ${num2} are equal to 100`);
}

*/

// Instructor code, created a function with ES6 variation. Better!
// const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(0, 100));


// console.log(isEqualTo100(10, 0));
// console.log(isEqualTo100(0, 10));


// console.log(isEqualTo100(80, 20));
// console.log(isEqualTo100(50, 50));

/********************************************************* */

/* Exercise 2:

  Write a JavaScript program to get the extension of a filename.
*/

// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension('index.html'));
// // works because using lastIndexOf grabs the last occurence of '.'
// console.log(getFileExtension('webpack.config.js'));

/********************************************************* */

/* Exercise 3:

  Write a JavaScript program to replace every character in a given string
  with the character following it in the alphabet.
*/

// functions used:  String.fromCharCode, charCodeAt

const moveCharsForward = (str) =>
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('abcd')); 