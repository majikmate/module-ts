import { log } from "node:console";

// === FUNCTIONS AS VARIABLES ===

// we have a add function
function add(a: number, b: number): number {
    return a + b;
}

// we have a multiply function
function multiply(a: number, b: number): number {
    return a * b;
}

// we no can declare an operation and assing the function to that variable
let operation = add;

// now we can call the operation to execute the assigned operation, in our
// case the add
console.log(
    operation(7, 9),
);

// by reassigning the operation to another function, the same call to
// operation now executes a different function
operation = multiply;

console.log(
    operation(7, 9),
);

// We can use this capabiltiy to delegate work to function by declaring a
// new type that complies with the signature our operation shall have
type operationType = (a: number, b: number) => number;

// Now we can use that type in a runOperation function that receives
// the values a and b as well as the ooperation that shall be executed
function runOperation(a: number, b: number, operation: operationType) {
    console.log(`the operation result is: ${operation(a, b)}`);
}

// runOperation is now customized because we can define the operation
// that shall be executed by runOperation in the call to runOperation
runOperation(7, 9, add);
runOperation(7, 9, multiply);

// === ARRAY METHODS ===

// functions as variables is useful in many cases. Here an exaple of
// array methods

// Lets assume we have following numbers and we want
// to get an array of all the even numnbers from that array.
// We can use array methods for achieving that
const numbers = [1, 7, 2, 4, 8, 6, 9, 1];
console.log(numbers);

// We now declare an isEven function that simply returns true for even
// numbers and false for odd numbers
function isEven(num: number) {
    return num % 2 == 0;
}

// the filter method on our array now can call the isEven() function for each
// element of the array and create a new array that only contains even numbers
log(numbers.filter(isEven));

// we can rewrite that using an arrow function giving us cleaner and shorter
// code because isEven does not to be declared beforehand, instead we use the
// short arrow function syntax that omits the name and the return in case
// we only have one line of operation
log(numbers.filter((num: number) => num % 2 == 0));

// another example is when we want to render the names stored in an array
// in an unordered list, we can use the forEach Array method to get al
// the list items from the array
const names = ["Seven", "Olaf", "Hugo", "Helga"];
let html = `<ul>`;
names.forEach((name: string) => {
    html += `<li>${name}<li>`;
});
html += `</ul>`;

console.log(html);
