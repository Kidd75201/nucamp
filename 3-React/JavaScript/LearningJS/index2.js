// let, const
// var is no longer recommende since the release of ECMA5



// String, Numbers, Boolean, null, undefined, Symbol
const name = 'Jose';
const age  = 30;

// Concatenation (old way)
// console.log('My name is ' + name + ' and I am ' +age)

// Template String
// console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}... Hi!`

// console.log(hello)

const s = 'Hello World! Again';

// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0,7).toUpperCase())

const a = 'Technology, Computers, IT, Code';

// console.log(a.split(', '));

// Arrays - variables that hold multiple values

// Using a constructor to create the array
// const numbers = new Array(1,2,3,4,5)
// console.log(numbers)

const fruits = ['apples', 'bananas', 'oranges', 'pears'];
fruits[4] = 'grapes';
// if size is not known, use push
fruits.push('mangos')
// to add to the beginning
fruits.unshift('strawberries')
// to remove from end
fruits.pop(fruits)
// verify if an array is an array
// console.log(Array.isArray(fruits))
// console.log(Array.isArray('hello'))
// to find the index number of item in array
// console.log(fruits.indexOf('oranges'))

// console.log(fruits)

//  ** Objects **

const person = {
    firstName: 'Jose',
    lastName: 'Beza',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        streets: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
// destructoring.
const { firstName, lastName, address:{city}} = person;
person.email = 'Joeb@email.com'
// console.log(person)


// Array of Objects
 const todos = [
     {
         id: 1,
         text: 'Take out trash',
         isCompleted: true
     },
     {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentis appt',
        isCompleted: false
    }
 ]

 for(let i = 0; i< todos.length; i++) {
        console.log(todos[i].text);
    }
    
//  const todoJSON = JSON.stringify(todos);
//  console.log(todoJSON)

 // For & While Loops
// for(let i = 0; i<= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
// }

// // While
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

