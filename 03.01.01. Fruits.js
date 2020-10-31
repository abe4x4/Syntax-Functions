// 1. Fruit
// Write a function that calculates how much money you need to buy fruit. You will receive a string for the
// type of fruit you want to buy, a number for weight in grams and another number for the price per
// kilogram.
// Print the following text on the console:
// 'I need ${money} to buy {weight} kilograms {fruit}.'
// Print the weight and the money rounded to two decimal places.
// The input comes as three arguments passed to your function.
// The output should be printed on the console.
function calculateKg(type, weight, pricePerk) {
    let weightInKg = (weight / 1000).toFixed(2);
    let money = (weightInKg * pricePerk).toFixed(2);
    console.log(`I need $${money} to buy ${weightInKg} kilograms ${type}.`);
}
calculateKg('orange', 2500, 1.80);
//I need $4.50 to buy 2.50 kilograms orange.
calculateKg('apple', 1563, 2.35);
// Example
// Input
// 'orange', 2500, 1.80
// Output
// I need $4.50 to buy 2.50 kilograms orange.
// Input
// 'apple', 1563, 2.35
// Output
// I need $3.67 to buy 1.56 kilograms apple.
// 2. Greatest Common Divisor - GCD
// Write a function that takes two positive numbers as input and compute the greatest common divisor.
// The input comes as two positive integer numbers.
// The output should be printed on the console.
// function main(x, y) {
//     gcd_two_numbers(x, y);
// }
// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number'))
//         return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while (y) {
//         var t = y;
//         y = x % y;
//         x = t;
//     }
//     console.log(x);
// }
// main(15, 5);
// main(2154, 458);
// // Example
// // Input
// // 15, 5
// // Output
// // 5
// // Input
// // 2154, 458
// // Output
// // 2
// // 3. Same Numbers
// // Write a function that takes an integer number as an input and check if all the digits in a given number are
// // the same or not.
// // Print on the console true if all numbers are same and false if not. On the next line print the sum of all the
// // digits.
// // The input comes as an integer number.
// // The output should be printed on the console.
// function main(input) {
//     checkSameNum(input);
// }
// function checkSameNum(input) {
//     input = String(input);
//     let result = true;
//     let sum = 0;
//     let firstDigit = input[0];
//     for (let i = 0; i < input.length; i++) {
//         sum += +input[i];
//         if (input[i] !== firstDigit) {
//             result = false;
//         }
//     }
//     console.log(result);
//     console.log(sum);
// }
// main(2222222);
// main(1234);
// // Examples
// // Input
// // 2222222
// // Output
// // true
// // 14
// // Input
// // 1234
// // Output
// // false
// // 10
// // 4. Time to Walk
// // Write a function that calculates how long it takes a student to get to university.
// // The function takes three numbers:
// // The first is the number of steps the student takes from their home to the university
// // Тhe second number is the length of the student's footprint in meters
// // Тhe third number is the student speed in km/h
// // Every 500 meters the student rests and takes a 1 minute break.
// // Calculate how long the student walks from home to university and print on the console the result in the
// // following format: 'hours:minutes:seconds'.
// // The input comes as three numbers.
// // The output should be printed on the console.
// function main(steps, meters, speed) {
//     TimeToWalk(steps, meters, speed);
// }
// function TimeToWalk(steps, meters, speed) {
//     let stepsNumber = Number(steps);
//     let stepsMetersHr = Number(meters);
//     let studentSpeed = Number(speed);
//     let distanceMeters = stepsNumber * stepsMetersHr;
//     let speedMetersSec = studentSpeed / 3.6;
//     let time = distanceMeters / speedMetersSec;
//     let rest = Math.floor(distanceMeters / 500);
//     let timeMin = Math.floor(time / 60);
//     let timeSec = Math.round(time - (timeMin * 60));
//     let timeHr = Math.floor(time / 3600);
//     if (timeHr < 10) {
//         console.log(timeHr + "0:" + (timeMin + rest) + ":" + timeSec);
//     } else {
//         console.log(timeHr + ":" + (timeMin + rest) + ":" + timeSec);
//     }
// }
// main(4000, 0.60, 5);
// main(2564, 0.70, 5.5);
// // Example
// // Input
// // 4000, 0.60, 5
// // Output
// // 00:32:48
// // Input
// // 2564, 0.70, 5.5
// // Output
// // 00:22:35