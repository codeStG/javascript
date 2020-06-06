//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
let i = 0;
while(i<10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...
var result = 0;

function sum(result) {
    return 30+2;
}

function multiply(result) {
    return result * 20;
}

function divide(result) {
    return result / power();
}

function power() {
    return 10*10;
}

result = sum(result);
result = multiply(result);
result = divide(result);
console.log(result);

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

//my code...
console.log(`20 is ${!!(20)} because numbers other than 0 and -0 are truthy`);

console.log(`0 is ${!!(0)} because 0 is defined as falsy since it is of no value`);

console.log(`"zero" is ${!!("zero")} because strings are truthy`);

const zero = 20;
console.log(`const zero = 20; is ${!!(zero)} because the value of 20 is truthy`);

console.log(`null is ${!!(null)} because it is defined as falsy since it is a non-existent value`);

console.log(`"0" is ${!!("0")} because strings are truthy`);

console.log(`!"" is ${!!(!"")} because "" is false and not (!) false is truthy`);

console.log(`{} is ${!!({})} because containers can contain truthy values, so they are truthy themselves`);

let functionName = () => {console.log("hello TEKcamp!")};
console.log(`() => {console.log("hello TEKcamp!"); is ${!!(functionName)} because functions can contain truthy values, so they are truthy themselves`);

console.log(`125 is ${!!(125)} because numbers other than 0 and -0 are truthy`);

console.log(`undefined is ${!!(undefined)} because it is defined as falsy since it is a non-existent value`);

console.log(`"" is ${!!("")} because it is empty and has no value so it is falsy`);


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

//my code...
switch(day) {
    case 'monday':
        console.log("we got a long week ahead of us...");
        break;
    case 'tuesday':
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case 'wednesday':
        console.log("We are smack dab in the middle of the week");
        break;
    case 'thursday':
        console.log("Thursday night... the mood is right");
        break;
    case 'friday':
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!");
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}

//my code...
age > 21 ? console.log("adult") : console.log("minor");

age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

age > 65 ? console.log("retired") : console.log("still working...");


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

var george = {
    name: "George Torres",
    age: function calculateAge() {
        return 2020 - this.birthyear;
    },
    gender: "male",
    hobbies: "coding, skating, gaming",
    profession: "student",
    education: "some college",
    birthyear: 1996,
    learn: function learn() {
        console.log(this.name);
    },
};

console.log(george.age())
george.learn();


/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would 
// accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...
var computer = {
    processor: "Intel i7-8700k 3.6GHz CPU",
    ram: "16GB DDR4 3200MHz RAM",
    motherboard: "ASUS ATX motherboard",
    drives: "1TB HDD, 1TB SSD, and 500GB M.2 NVMe",
    gpu: "GTX 1070 Super",
    specs: function getSpecs() {
        console.log(this.processor + " with " + this.ram + " connected to an " + this.motherboard + " with " + this.drives + " and a " + this.gpu + " graphics card.");
    },
};

computer.specs();



/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

function getFavDataTypes() {
    console.log("Boolean:");
    console.log("I like the boolean data type because it evaluates to a simple 'true' or 'false'. This comes in handy in a multitude of cases in programming.");
    console.log("Array:");
    console.log("I highly enjoy working with arrays; they provide a much easier, more uniform way of storing and accessing data.");
    console.log("String:");
    console.log("The string data type allows me to store full sentences and manipulate them accordingly, which helps with typical data manipulation procedures.");
}

getFavDataTypes();


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  
// This HOF should return another function fn(y) that takes another single parameter y.  
// This inner function should compute the product of it's parameter with the parameter passed into multiple.  
// Use this returned "first-class" function to compute triples of any given number.

//your code...
function multiple(x) {
    return function fn(y) {
        return x*y;
    }
}

let triples = multiple(3);
console.log(triples(2));

// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  
// Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  
// Run the function returned by the higher order function to display the future value of the stock.  

//your code...

function stockGain(basis) {
    let message = " is how much the stock has increased.";
    return function(yrs) {
        let r = 0.05;
        return console.log(basis + (basis*yrs*r));
    }
}

let futureValue = stockGain(20000)
futureValue(2)