//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. 
// If the string is empty, the output should be true, otherwise it should return false. 



//your code...
let str = "";

function isEmpty(str) {
    if(str.trim() === "") {
        console.log(true);
    } else {
        console.log(false);
    }
}

isEmpty(str);


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). 
// Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
let replace = 'Learning JavaScript is fun!';
console.log(replace);
replace = replace.replace("fun", "cool");
console.log(replace);




/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. 
// Use an arrow function and one of the built-in array methods. 


//function numArray() {
//your code...
let f = () => {
    numArr = [];
    squaredArr = [];
    //Step through 1 - 5 and push them into the numArr array.
    for(i = 1; i < 6; i++) {
        numArr.push(i);
    }

    //Step through the index of the number array to multiply the value held within each index by itself and push it into the index (i) of the squaredArr array.
    for(i = 0; i < numArr.length; i++) {
        squaredArr.push(numArr[i] * numArr[i]);
    }
    return squaredArr; 
}

console.log(f());


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. 
// Write a JavaScript program that returns an array of the numbers that are greater than 3. 
// Use an arrow function and one of the built-in array methods.



//your code...
var numArr = [1, 3, 5, 7, 9, 1, 3, 5]

let fn = () => {
    let largeArr = []
    for(i = 0; i < numArr.length; i++) {
        if (numArr[i] > 3) {
            largeArr.push(numArr[i]);
        } 
    }
    return largeArr;
}

console.log(fn());


/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. 
// Use an arrow function and one of the built-in array methods. 



//your code...
var numberArr = [7, 8, 3, 5, 6];

let fnc = () => {
    let sum = 0;
    numberArr = numberArr.reverse();
    for(i = 0; i < numberArr.length; i++) {
        sum = sum + numberArr[i];
    }
    return sum;
}

console.log(fnc());



/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 
// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. 
// For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  


//your code...                                                                                                       
function dna(str) {
    let dnaArr = [];
    let dnaArrOrg = [];
    for(i = 0; i < str.length; i++) {
        dnaArr.push(str.charAt(i));
        //uncomment below to see current order of dnaArr elements.
        //console.log(dnaArr[i]);
    }
    for (i = 0; i < dnaArr.length; i++) {
        if (dnaArr[i] === 'G' && i % 2 === 0) {
            dnaArrOrg.push('C');
        } else if (dnaArr[i] === 'T' && i % 2 === 0) {
            dnaArrOrg.push('A');
        } else if (dnaArr[i] === 'A' && i % 2 !== 0) {
            dnaArrOrg.push('T');
        } else if (dnaArr[i] === 'C' && i % 2 !== 0) {
            dnaArrOrg.push('G');
        } else {
            continue;
        }
    }
    return dnaArrOrg;
}

console.log(dna('GCTA'));


/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.
// Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

var onlyNumbers = [];

function maxNumber(numbers) {

    //my code...
    let num = 0;
    let max = 0;

    for(var i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) === 'object') {
            let value = Object.values(numbers[i]);
            numbers[i] = Number(value);
            num = numbers[i];
        } else if (typeof(numbers[i]) === 'number') {
            num = numbers[i];
        } else if (typeof(numbers[i]) === undefined) {
            numbers.splice(i, 1);
            i = i - 1;
        } else if (typeof(numbers[i]) === 'string' && numbers[i] === "one") {
            numbers[i] = 1;
            num = numbers[i];
        } else if (typeof(numbers[i]) === 'string' && numbers[i] === "two") {
            numbers[i] = 2;
            num = numbers[i];
        } else if (typeof(numbers[i]) === 'string' && numbers[i] === "three") {
            numbers[i] = 3;
            num = numbers[i];
        } else if (typeof(numbers[i]) === 'string' && numbers[i] === "3") {
            numbers[i] = 3;
            num = numbers[i]; 
        } else if (typeof(numbers[i]) === 'boolean') {
            numbers.splice(i, 1);
            i = i - 1;
        } else {
            numbers.splice(i, 1);
            i = i - 1;
        } 

        if (num > max) {
            max = num;
        } else {
            continue;
        }
    }
    //This removes the 0 value left by the array at the end
    numbers.splice((numbers.length - 1), 1);
    //onlyNumbers is created to be used by 7.b
    onlyNumbers = [...numbers];
    return max;
}

console.log(maxNumber(numbers));


// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    return numbers.sort(function(a, b){return b - a});
};

console.log(sortNums(onlyNumbers));


/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  
// An object data type has already been set as the 1st key / val pair.
const keyObj = {company : 'TEKsystems'};
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");
mapObj.set('isEmployee', 'boolean');
mapObj.set('address', 'string');
mapObj.set(workDays, 'array');
mapObj.set('telephone', 'number');
mapObj.set('newSeat', undefined);


console.log(mapObj.has({company : "TEKsystems"}));
console.log("The original console.log() statement printed false because you cannot explicitly store an object as the key, you must first assign it to a variable. Then you must test if the key is the variable.")
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
// Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

const mapObjTwo = new Map();
mapObjTwo.set(keyObj,'object');
mapObjTwo.set('isEmployee', 'boolean');
mapObjTwo.set('address', 'string');
mapObjTwo.set(workDays, 'array');
mapObjTwo.set('telephone', 'number');
mapObjTwo.set('newSeat', undefined);


console.log(mapObjTwo.has(keyObj));

// loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  
// Use array methods to do this.  Example output : ['string',number','boolean',array','object']

let newArray = [];
for (let value of mapObj.values()) {
    newArray.push(value);
}
newArray.shift();

console.log(newArray);

/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
ones = ones.reverse();

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    return console.log(cb);
}

function getName(callback) {
    const cb = 'George';
    callback(cb);
}

getName(performer);

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  
// Be sure to write comments explaining what the feature is and why it is useful.

//Destructuring is a new feature that allows us to extract data from arrays or objects and assign it into variables in an easier way.
//Given the constant destructArray and its values...
const destructArray = ['hello', 'bonjour', 'hola', 'hallo'];

//We can easily assign the values at index[0], index[1], index[2], etc. respectively to their language counterpart variables using...
let [english, french, spanish, german] = destructArray;

//Log the results of each variable to the console
console.log(english);
console.log(french);
console.log(spanish);
console.log(german);