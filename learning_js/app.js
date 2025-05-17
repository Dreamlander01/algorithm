// single style comment
/* multiline comment

understanding the difference between single line and muliti line */

// a variable in javascript is a named container used to store data that can be used and changed later in the program

// there are 3 ways to declare a Java variable
// var
// let
// const

var firstname = "Pamela";
var firstname = "Ayinla";
// redeclared

firstname = "Tolu";
// reassigned
console.log(firstname);

// 2 let, can be reassigned but not redeclared

let lastname = "Family";

// You cant call let twice i.e you cant give let the same variable
lastname = "Bethany";
// reassigned

// const cannot be redeclared and reassigned

const fullname = "daniel finn";

function greeting() {
  console.log("this is my first javascript function");
}

greeting();

// this is a second alert
// alert(" this is my first javascript");

// the purpose of prompt is to get user inpute

let userInput = prompt("please enter your name");

// the purpose is to confirm ok or cancel

let isSure = confirm(" Are you sure you want to proceed");

// console.log to helo keep tracks of bugs and error

console.log("Tolu Ayinla");

// data types in javascript
// primitive data types

// 1. string example

let name = "daniel Finn";
let lasname = "finn";

//2. Number example

let age = 30;
// integer is number

// boolen example
// boolean has two options true or false
let isMarried = false;

// undefined
// means there is no value

let result;
console.log(result);

// null examples
// null means nothing
let emptyValue = null;
console.log(emptyValue);

// example of symbol
let uniqueId = Symbol("id");

// non primitive data types
