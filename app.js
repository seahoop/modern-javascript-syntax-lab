
/*------------------------------------------------*/
//Exercise 1
// Use `.map()` to iterate over the following array:
console.log('Exercise 1-------------------')
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const nums2 = nums.map((currentElement) =>{
    return currentElement + '98';
});

console.log(nums2);
// Your code here

/*------------------------------------------------*/
//Exercise 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
console.log('Exercise 2-------------')
const pizzaArray = ['Pineapple', 'Olives', 'Anchovies'];


const [firstPizza, secondPizza] = pizzaArray;

console.log(firstPizza);
console.log(secondPizza);

// Your code here

/*------------------------------------------------*/
//Exercise 3

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
/*console.log('Exercise 3---------------')
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  //object destructuring 
  const {make, model} = car;

  console.log(make);//audi
  console.log(model);//q5
  // Your code here*/
  



/*------------------------------------------------*/
//Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
console.log('Exercise 4--------------------------')
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);
// Your code here


/*------------------------------------------------*/
//Exercise 5
console.log('Exercise 5--------------------------')

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };


  const clonedCar = {...car};

  //update the properpties of clonedObejct;
  clonedCar.make ='Supra';
  clonedCar.model = 'q7';
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  console.log('Original: ', car);
  console.log('Clone: ', clonedCar );
  // Your code here
  


  /*------------------------------------------------*/
//Exercise 6

console.log('Exercise 6----------------------------');
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const object = 'userProfile';

const propertyName = {
    type: 'singleFamily',
    worth: 'five-hundred-thounsands',
    sellDate: 'saturday',
    [object]: 'Ericdu6865',
};

console.log(propertyName);



  /*------------------------------------------------*/
//Exercise 7

console.log('Exercise 7 -----------------------------')

//in exportingFile.js and importingFile.js

/*export const myNumber = 123;
export const myString = 'Hello';
export default function superCoolFunction() {

}
import { myNumber, myString } from './myData.js';

import superCoolFunction from './superCoolFunction.js';
import * as MyData from './myData.js';
console.log(MyData.myNumber);
console.log(MyData.myString);
*/


/*-----------------------------------------------*/
//Exercise 8 
console.log('Exercise 8 -----------------------------')
/*
function addThreeNumbers(numA= 1, numB = 8, numC = 9) {
    return numA + numB + numC;
}

console.log(addThreeNumbers(4))*/
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function sentenceCombine(random, noun= 'cat', adjectives= 'white'){
    return random +' '+ noun + 'is' + adjectives;
}

console.log(sentenceCombine('The'));



/*-----------------------------------------------*/
//Exercise 9 
console.log('Exercise 9 -----------------------------')

let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');



/*-----------------------------------------------*/
//Exercise 10 
console.log('Exercise 10 -----------------------------')
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);


/*-----------------------------------------------*/
//Exercise 11
console.log('Exercise 11 -----------------------------')

const adventurer = {
    name: 'Alice',
  };
  
  let catAge = adventurer.cat?.age;
  
  console.log(catAge); // undefined
  