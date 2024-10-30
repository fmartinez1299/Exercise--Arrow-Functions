// Task 1: No Parameters: Activate Hyperdrive 
const activateHyperdrive = () => {
    console.log("Hyperdrive activated!");
};
activateHyperdrive(); // Calling the function to test it

// Task 2: Implicit Return: Scan for Lifeforms
const scanForLife = () => "No lifeforms detected";
console.log(scanForLife()); // Printing the result of calling scanForLife

// Task 3: Implicit Return with Objects: Log Coordinates
const currentCoordinates = () => ({ x: 0, y: 0, z: 0 });
console.log(currentCoordinates()); // Printing the returned object from currentCoordinates

// Task 4: Understanding `this`: Message from Home Base
const spacecraft = {
    receiveMessage: (message) => {
        console.log("Message received: " + message);
    }
};
spacecraft.receiveMessage("All systems operational."); // Directly calling receiveMessage

/*
 * Observations:
 * In this context, using arrow function syntax for `receiveMessage` causes `this` to be lexically bound. 
 * It does not refer to the `spacecraft` object but instead takes `this` from the surrounding lexical scope.
 * This means `this` inside `receiveMessage` will be undefined or refer to the global object (in non-strict mode) instead of the `spacecraft`.
 */

// Additional Tasks for Hoisting Exercise
// 1. Declare a Destination Variable
let destination = "Ancient Egypt"; 
console.log(destination); // Printing the initial destination

// 2. Change the Destination
destination = "Medieval Europe"; 
console.log(destination); // Printing the new destination

// 3. Declare a Constant Travel Date
const travelDate = "2024-03-15"; 
console.log(travelDate); // Printing the travel date
// travelDate = "2024-04-01"; // Uncommenting this line will cause an error: TypeError: Assignment to constant variable.

// 4. Experiment with Variable Hoisting
console.log(timeMachineModel); // This will log undefined due to hoisting
var timeMachineModel = "T-800"; 
console.log(timeMachineModel); // Now this will log "T-800"

// Observations about Hoisting:
// The `timeMachineModel` variable is hoisted to the top of its scope, allowing it to be referenced before its declaration.
// However, it is initialized to `undefined` until the assignment occurs, which is why the first console log shows undefined.
