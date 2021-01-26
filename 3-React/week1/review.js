"use strict";

// const bicycle = {
//   color: "blue",
//   electric: false,
//   start() {
//     console.log("You start the engine on your ${color} bike");
//   },
// };

// const hello = (name) => ({
//   studentName: name,
// });

// bicycle.color = "green";
// bicycle.electric = true;

// hello("jose");

class Book {
  constructor(title, author, year, isRead = false) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }
}

const book1 = new Book("Steppenwolf", "Herman Hesse", 1927, true);
const book2 = new Book("Dune", "Frank Herbert", 1965);
const book3 = new Book("The fools run", "John Sanford");

class Audiobook extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
  playAudio() {
    console.log(`The audio recording of ${this.title} begins to play.`);
  }
}
const book4 = new Audiobook("The Martian chronicles", "Ray Bradbury", 1950);

const myArr = [1, 2, 3];
const squared = myArr.map((x) => x * x);

const sum = myArr.reduce((sum, curVal) => sum + curVal, 0);
const mult = myArr.reduce((mult, curVal) => mult * curVal, 1);

const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

const ages = data
  .filter((animal) => animal.type === "dog")
  .map((dog) => dog.age * 7)
  .reduce((sum, dogyears) => sum + dogyears, 0);
