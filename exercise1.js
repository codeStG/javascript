//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...
//Part 1
var calcCelsius = function(temp) {
    return (temp - 32) * (5/9);
}

var temp = 78;
var celciusTemp = calcCelsius(temp);

console.log(celciusTemp);

//Part 2 
var calcFahrenheit = function(temp) {
    return (temp * (9/5)) + 32;
}

var fahrenheitTemp = calcFahrenheit(celciusTemp);

console.log(fahrenheitTemp);


/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. 
// Console log "yes" or "no"

//your code...
var age = 16;

if (age >= 18) {
    console.log('Yes');
} else {
    console.log('No');
}


/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." 
// Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) 
// After you have finished, use the join() method to change the array back into a string.

//your code...
//Declaring the string and splitting it up into an array using split().
var str = "The five boxing wizards jump quickly.";

var splitArray = str.split(" ");

console.log(splitArray);

//Rejoining the words back together into a string using join().
var rejoin = splitArray.join(" ");

console.log(rejoin);


/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. 
// Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...
var num = 2144061517;

var reversePhone = function(num) {
    var numstr = num.toString();
    splitArray = numstr.split('');
    splitArray.reverse();
    return splitArray.join('');
}

console.log(reversePhone(num));


/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. 
// Write a function to get the year, color, make, and model in that order.

//your code...
//This creates the care object.
var car = {
    make: "Nissan",
    model: "Altima",
    year: 2015,
    color: "Black",
}

//This function retrieves the year, color, make and model values in that order from the car object.
var getCarInfo = function(array) {
    var values = [car.year, car.color, car.make, car.model];
    return values;
}

console.log(getCarInfo(car));


/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. 
// Each iteration, the for loop will check if the current number is odd or even and display the output.


//your code...
for(i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i + " is an even number.");
    } else {
        console.log(i + " is an odd number.");
    }
}


/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. 
// For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...
for(i = 1; i < 101; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("TEKcamp");
    } else if(i === 1) {
        console.log("TEKcamp");    
    } else if(i % 5 === 0) {
        console.log("camp");
    } else if(i % 3 === 0) {
        console.log("TEK");
    } else {
        continue;
    }
}

/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...
for(i = 0; i < nums.length; i += 3) {
    console.log(nums[i]);
}


// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

//my code...
//Instructions say to print the last element of the array after setting it equal to the school variable, 
//but does not say whether or not it is okay that the last element is an object. 
// Do I instead need to ensure that only the value is printed, not the key also?
var i = foodArray.length - 1;
var school = Object.values(foodArray[i]).toString();
console.log(school);


const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

//my code...
for(i = 0; i < adjectiveArray.length; i++) {
    str = foodArray[i].toString();
    char = str.charAt(str.length - 1);
    if(typeof(foodArray[i]) === 'object') {
        var obj = Object.values(foodArray[i]).toString();
        char = obj.charAt(obj.length - 1);
        if (char === 's') {
            console.log(obj + " are " + adjectiveArray[i]);
        } else {
            console.log(obj + " is " + adjectiveArray[i]);
        } 
    }
    if (char === 's') {
        console.log(foodArray[i] + " are " + adjectiveArray[i]);
    } else if (typeof(foodArray[i]) === 'object') {
        continue;
    } else {
        console.log(foodArray[i] + " is " + adjectiveArray[i]);
    }
}



/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [];
function doMath() {};


