/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript ECMAScript 6 and Intermediate JavaScript
   FE Lab 04
*/

/* ----------------------------------------------------- */
// Key Term List:
// let
// const
// var
// declare a variable
// ECMAScript6 (ES6)
// arrow function
// function
// parameter
// argument
// callback
// promise
// string concatentation
// template literal
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*
 *                                     ~Lunch Date~
 *
 *  Your friend is coming over for lunch. Let's use code to decide what to eat!
 *
 */

/*---------------------------------- Let and Const -------------------------------------*/
console.log(`-------------------------- 
Question 1: Declaring Let and Const variables`)

/*
 * Step 1: Initialize two variables using 'const' and set the value of those variables to what you're having to eat and drink
 * Step 2: Initialize two more variables using 'let' and set one value to your name, and the other to your friends name.
 *
 * ↓ YOUR CODE HERE ↓ */
const grindage = "Mac n Cheese"
let gulpage = "Dr. Pepper"

let me = "Jon"
let pal = "Blake"

console.log(grindage, gulpage, me, pal)

//Question: Name a reason why you would use const instead of let.
//Answer: Using const would create a permenant variable that can't be changed.

/*---------------------------------- Template Literals -------------------------------------*/
console.log(`-------------------------- 
Question 2: Template Literals`)

/*
 * Step 1: Using template literals and the variables we just created,
 *         write a sentence describing what you and your friend are eating & drinking for lunch.
 *
 *
 * ↓ YOUR CODE HERE ↓ */
console.log(`${pal} and ${me} went down to the food hall to get some ${grindage} and ${gulpage} for their tum tums!`)
//Question: How would the sentence you wrote look if you used string concatenation instead of template literals?
//          console.log() your answer to check
//Answer:
console.log(pal + " and " + me + "went down to the food hall to get some " + grindage + "and " + gulpage + "for their tumtums.")
console.log(`-------------------------- 
Question 2a: Oh no`)

/* Oh no! You just remembered your friend is allergic to the drink we prepared!
 *
 * Step 1: In the section below, reassign your drink item to something else. console.log() your drink variable and run your code.
 * Step 2: Make a change to your code in Question 1 to fix the error. Run your code to make sure it's fixed.
 *
 * ↓ YOUR CODE HERE ↓ */
gulpage = "Coke"
console.log(gulpage);
//Question: Read the error message - in your own words - what does it mean?
//Answer: A constant variable can't be changed or reassigned so a new variable must
//be created or the given variable must be reassigned as a non-constant.

/*---------------------------------- Arrow Functions -------------------------------------*/
console.log(`-------------------------- 
Question 3: Arrow Functions`)

/* You and your friend eat together so often that having a new variable for each food/drink
 *     item could get tiring.
 *
 * Let's use functions so we can easily describe what we're eating.
 *
 * Step 1: Using ES6 standards, write a fat arrow function using const called "lunchTime" that
 *         takes in two parameters: foodChoice, and drinkChoice.
 * Step 2: Have the function 'return' the same sentenced you used to describe eating lunch above
 *         but replace the food/drink variables with our newly created parameters.
 * Step 3: Copy the code below, ↓ paste it underneath our new function, and run the code.
 *         console.log(lunchTime('Pizza','Water'))
 * ↓ YOUR CODE HERE ↓ */
const lunchTime = (foodChoice, drinkChoice)=>{
    return `${pal} and ${me} went down to the food hall to get some ${foodChoice} and ${drinkChoice} for their tum tums!`
}
console.log(lunchTime('Pizza','Water'));
//Question: What would your function look like if we were using the old way of creating a function?
//Answer: function lunchTime (foodChoice, drinkChoice){
//          return `${pal} and ${me} went down to the food hall to get some ${foodChoice} and ${drinkChoice} for their tum tums!`
//}

/*---------------------------------- Callbacks -------------------------------------*/
console.log(`-------------------------- 
Question 4: Callbacks`)

/**
 * You and your friend ALWAYS eat lunch, but it might be a good idea to plan for the next date in advance.
 * Let's use functions and callbacks to describe what we're eating today, and what we want tomorrow.
 *
 * Step 1: Create a ES6 fat arrow function called 'foodForTodayAndTomorrow' that takes 3 parameters: tomorrowsFoodChoice, tomorrowsDrinkChoice, and callbackFunction.
 * Step 2: Have your function return a new string in this format: `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`
 * Step 3: console.log() your new function, foodForTodayAndTomorrow, and pass in lunchTime('newFoodItem', 'newDrinkItem') as the argument for the "callbackFunction" parameter.
 *
 * ↓ YOUR CODE HERE ↓ */
const foodForTodayAndTomorrow = (tomorrowsFoodChoice, tomorrowsDrinkChoice, callbackFunction) =>{
    return `${callbackFunction} Tomorrow we want ${tomorrowsFoodChoice} and ${tomorrowsDrinkChoice}.`
}

console.log (foodForTodayAndTomorrow("frog legs", "a good Kolsch", lunchTime, "sushi", "sake"));
console.log(`-----------Finished------------`)

console.log("Question 1: A, B, and C")

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
let difference = ages[ages.length - 1] - ages[0];
//This establishes a variable that subtracts the value of the first age in the array
//from the value of the last age in the array. Its imporant to specify the value 
//of each otherwise the script will establish the difference of each values placement
//in the array.
console.log(difference)

ages.push(57); 
//push adds a value to the end of the array
console.log(ages);
let newDifference = ages[ages.length -1] - ages[0];
//I had to nearly repeat the code for the new difference.
//I think there may be another way to do this. I'm doing 
//lots of figuring it out as I go.
console.log(newDifference)

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
//This function establishes the loop and adds up the ages.
let average = sum / ages.length;
//This line divides the sum by the number of ages to create 
//the average.
console.log (average)

console.log("Question 2: A, and B")

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let letters = 0;

for (let i = 0; i < names.length; i++) {
    letters += names[i].length;
}
//This loop counts the total number of letters in the array.

const average2 = letters / names.length
console.log(average2);
//This constant divides by the number of names or individual
//strings creating an average.

let concatenatedNames = '';

for (let i = 0; i < names.length; i++ ) {
    concatenatedNames += names[i] + ' ';
}
//This loop is pretty self explanitory.
console.log(`Concatenated names: ${concatenatedNames.trim()}`);

console.log("3. How do you access the last element of any array? arrayName[arrayName.length - 1]")

console.log("How do you access the first element of any array? arrayName[0]")

console.log("Question 5")

const numberOfLetters = [];
//This establishes an empty array.
for(let i = 0; i < names.length; i++) {
    //This loop iterates to each name and retrieves each length.
    numberOfLetters.push(names[i].length);
} 
//The body of the loop pushes each length to the 'numberOfLetters'
//array.
console.log(numberOfLetters);

console.log("Question 6")
//Simple loop counting the number of names in the array.
for(let i=0; i < names.length; i++) {
    console.log(names.length)
}
console.log("Question 7")

function sayItABunch (word, n) {
    let conc = ''
    //This is a function with two perameters and conc is an empty 
    //string.

    for( let i = 0; i < n ; i++) {
        conc += word;
    }

    //This loop adds an extra word to the conc string each iteration.
    return conc;
}


const result = sayItABunch ('hello', 5);
console.log(result);
//The sayItABunch function is called with arguments 'hello, and 5. 

console.log("Question 8")

function fullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
//This function establishes two parameters also and returns both
//with a space in between.

const whatsYourName = fullName('Stud', 'Beefpile')
console.log(whatsYourName)

//fullName perameters are called with a lovely name and linked to 
//the whatsYourName variable, then printed.

console.log("Question 9")

function centuplicate (numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
//In this loop the sum starts at zero and adds up the number values
//in each iteration of the loop. 
    return sum > 100;
}
//At the end of the loop, if the values add up to more than 100, it
//will return true. If not, the function will return false.


const arrayOfNumbers = [19, 6, 37, 28, 2, 14, 24];
const answer = centuplicate(arrayOfNumbers);
//These lines establish and array of numbers and applies the 
//centuplicate function to them.

console.log(answer);

console.log("Question 10")

function avg (numbers) {
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length
}

//This block of code is just like the last one except the return statement
//is also dividing by the numbers.length to produce an average instead of
// less than a specified value. 
 const averageNumbers = [4, 8, 15, 16, 23, 42];
 const median = avg (averageNumbers);

 console.log(median)

 console.log("Question 11")


 //For this question a function is established that will determine which
 //average is greater.
 function theMostAverage (array1, array2) {
    let average1 = calculateAverage(array1);
    let average2 = calculateAverage(array2);

    return average1 > average2;
 }

 //This second function averages both arrays and avoids dividing by zero
 //in case of an empty array
 function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
 }

 //Then just plug in the numbers and call the function.
 const array1 = [23, 67, 1, 16, 32];
 const array2 = [12, 45, 17, 21, 5];

 const greatestAverage = theMostAverage(array1, array2);
 console.log(greatestAverage);

 console.log("Question 12")

 //This function uses an if statement to determine if I will buy a drink based
 //on temperature and monetary parameters. 
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50){
        console.log("I'll buy a Drink!");
    }
    else {
        console.log("Maybe some other time.");
    }
}

//Then input the two parameters and call the function.
const isHotOutside = true;
const moneyInPocket = 20

willBuyDrink(isHotOutside, moneyInPocket)

console.log("My own problem.")

//Alright, my own problem is averaging 4 arrays all at once. In brewing beer
//the gravity of a solution of wort (pre-fermented beer) is measured at various
//stages in the process. The first function establishes that a second function 
//called calculateAverage needs to be performed on all four arrays.
function brewingAverages(firstRunnings, finalRunnings, preBoil, starting){
   const result = {
        firstRunnings: calculateAverage(firstRunnings),
        finalRunnings: calculateAverage(finalRunnings),
        preBoil: calculateAverage(preBoil),
        starting: calculateAverage(starting),
   };

   return result;
}

//This function calculates the averages using an arrow function to sum and 
//and then divides by the length of the array while preventing from dividing
//by zero.
function calculateAverage(gravity) {
    if (gravity.length === 0) {
        return 0;
    }
    const sum = gravity.reduce((total, value) => total + value, 0);
    return sum / gravity.length;
}


const firstRunnings = [19.8, 20, 19.8, 20.2, 19.2];
const finalRunnings = [10.6, 11.6, 11.3, 11.0, 10.5];
const preBoil = [17.5, 17.7, 17.7, 18.2, 18.3];
const starting = [20, 20.4, 20.3, 20.8, 20.3];

const averageGravity = brewingAverages(firstRunnings, finalRunnings, preBoil, starting);
console.log(averageGravity)