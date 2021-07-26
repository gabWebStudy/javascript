'use strict';

// AULA 104 - Desestruturando objetos

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // vamos adicionar um metodo ao objeto restaurante
  // para mostrar como também podemos desestruturar retornos de funções
  order: function(starterIndex, mainIndex) { //accepts 2 parameters: 1 -> index for the starter menu / 2 -> index for the main menu
    // it will return an array with the content of the array based on the index of the parameters
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function( { time, adress } ) { // we can destructure the object in order to use its properties. we don't need to worry about the order
    // the names properties has to be the exact name of the object we passed as argument
    // but don't need to match the order
    console.log(`the time is: ${time}, the adress is ${adress}`)
  }
};

// to destructure objects, we use the curly braces
// we need to provide the variable names that exactly match the ones we want to retrieve from the object
// since we are going to retrieve the elements by its names, we don't need to skip elements. it's like fishing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


// destructuring objects will be very useful to pass to your own variables the content of external api objects


// we can set new names to the variables, different from their natural names on the objects
// use the doble dots
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;


// setting default values
// to do not get undefined
// use the equal sign
const { menu = [], starterMenu = [] } = restaurant;


// mutating variables
let a = 111;
let b = 999;
// let's create a generic object
const genericObject = { a: 23, b: 7, c: 14 };
// let's destructure the object
// we want a to become 23 and b to become 14
// we can't use the keywords 'const' or 'let', because 'a' and 'b' are already declared above -> let {a, b} or const {a, b}
// we'll get a syntax error if we try to destructure without using the keyword -> {a, b} = genericObject
// if we start a line with a curly brace, javascript is waiting for a code block. and we can not assign anything o a code block
// the trick is to wrap everything into parentesis
({ a, b } = genericObject);
console.log(a, b); // 23, 7
// we overwrote the two initial variables


// nested objects
// above we have already destructured the restaurant object and created the openingHours variable
// use the colon and open brackets
// use the exact property name
const { fri: { open, close } } = openingHours;
console.log(open, close); // 11, 23
// but we can also set our own names to the variables
const {fri: { open: o, close: c } } = openingHours;


// problem: functions that receive a lot of parameters. it's hard to know the exact order of all the parameters
// instead of defining the parameters manually, we can only pass an object into the function and destructure it on the function declaration
// look at the orderDelivery method we created at the restaurant object above
// let's pass an object as the argument to the orderDelivery()
restaurant.orderDelivery(
  // since we'll destructure it, we don't need to worry about the order
  {
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
  }
);
// // destructure arrays -> unpack values from an array into different variables
// // retrieve elements from an array -> store into variables

// // if i had to do it without the destructuring method
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c); // 2, 3, 4

// // with destructuring method
// // we can declar all the 3 variables at the same time

// const [x, y, z] = arr;

// console.log(x, y, z); // 2, 3, 4

// // you use the brackets before the equal signal
// // you must use the const keyword to declare the variables

// // the original array is not affected
// // we are not destroying it, we're just unpacking it

// console.log(arr); // [2, 3, 4]

// // playing the desctructuring method with our restaurant object

// // we don't need to take all of the elements out of the array
// const [first, second] = restaurant.categories;
// // it will always follow the order of the elements inside the array

// console.log(first, second); // Italian, Pizzeria

// // what if we wanted to pick the first and the third?
// // leave a hole into the destructuring operator

// let [one, , three] = restaurant.categories;

// // the second element will  be skiped
// // we don't need to create variables to the items we won't need

// // switch the content of the two variables whithout destructuring
// const temp = one;
// one = three;
// three = temp;

// // with destructuring it's a lot easier
// let [main, , secundary] = restaurant.categories;
// console.log(main, secundary); // Italian Vetetarian

// [secundary, main] = [main, secundary];

// console.log(main, secundary); // Vegetarian Italian

// // let's destructure that method we created above in the restaurant object
// const [starterDish, mainDish] = restaurant.order(2, 0);
// console.log(starterDish, mainDish); // Garlic Bread, Pizza

// // working destructuring with nested arrays
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // j -> [5, 6]
// console.log(i, j); // 2, [5, 6]

// // what if we wanted the individual elements inside the intern array, like 5 or 6?
// // we need to do destructuring inside of destructuring
// const nested2 = [2, 4, [5, 6]];
// const [k, , [ , l]] = nested2; // j -> 6
// console.log(k, l); // 2, 6

// // setting default values with destructuring
// // it can be useful when we don't know the length of the array

// // without setting the default value
// const [d, f, g] = [8, 9];
// console.log(g); // we'll get undefined

// // let's set the default value
// const [o = 1, p = 1, q = 3] = [8, 9];
// console.log(o, p, q); // 8, 9, 3