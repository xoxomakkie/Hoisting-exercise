// Task 1: Declare a Destination Variable
let destination = "Ancient Egypt";
console.log(destination); // Ancient Egypt

// Task 2: Change the Destination
destination = "Medieval Europe";
console.log(destination); // Medieval Europe

// Task 3: Declare a Constant Travel Date
const travelDate = "2024-03-15";
// travelDate = "2025-01-01"; // This will cause an error

/*
 * Observations:
 * Reassigning a const variable throws a TypeError because const variables cannot be reassigned.
 */

// Task 4: Experiment with Variable Hoisting
console.log(timeMachineModel); // undefined
var timeMachineModel = "T-800";

/*
 * Observations:
 * Variables declared with var are hoisted and initialized as undefined.
 * That's why timeMachineModel can be accessed before its declaration without throwing an error.
 */
