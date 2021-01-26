"use strict";

class Student {
  // constructor with parameters
  constructor(name, email, community) {
    // parameter values to class properties with same name using 'this' keyword
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(student) {
    // Couldn't get if to work properly
    const studentWithSameEmail = this.students.filter(
      (regStudent) => this.students.email === regStudent.email
    );
    // console.log("Same email: " + studentWithSameEmail);
    if (studentWithSameEmail.length > 0) {
      console.log("Sorry email has been used");
    } else {
      this.students.push(student);
      console.log(`This ${student.email} has been registered`);
    }
  }
}

const webDevFundamentals = new Bootcamp("Web Dev Fundamentals", "Beginner");
const react = new Bootcamp("React Intro", "Beginner");
// const bootstrap = new Bootcamp("Bootstrap", 1);
const student1 = new Student("Mike", "email@email.com", "Dallas");
const student2 = new Student("Roy", "new@email.com", "Dallas");
const student3 = new Student("Joe", "emaill@email.com", "Dallas");
// console.log(react.registerStudent("Joe", "email@email.com", "nucamp"));
