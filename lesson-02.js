"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const bakeryName = "Maison Sarah";
let numberOfCustomers = 50;
const breadPrice = 2.5;
let isOpen = true;
const mainProduct = "Croissant";

console.log(bakeryName);
console.log(numberOfCustomers);
console.log(breadPrice);
console.log(isOpen);
console.log(mainProduct);
// bakeryName is const because the name of the bakery does not change.
// numberOfCustomers is let because the number of customers changes every day.
// breadPrice is const because the price is fixed.
// isOpen is let because the opening status can change.
// mainProduct is const because the main product stays the same.

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof bakeryName);
console.log(typeof numberOfCustomers);
console.log(typeof breadPrice);
console.log(typeof isOpen);
console.log(typeof mainProduct);

console.log(typeof null);
console.log(typeof undefined);
// The result of typeof null being "object" is a famous historical bug in JavaScript.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let notAssigned;
let emptyValue = null;

console.log(notAssigned);
console.log(emptyValue);

console.log(typeof notAssigned);
console.log(typeof emptyValue);
// undefined means a variable exists but has no assigned value, while null is an intentional empty value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
const count = Number(countText);
const flag = Boolean(flagText);

console.log(price, typeof price);
console.log(count, typeof count);
console.log(flag, typeof flag);

const numberText = 5;
const number = String(numberText);
console.log(number, typeof number);
// Number() would produce NaN if the string is not a clean number.

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
// const bakeryName = "Maison Sarah";
// bakeryName = "The Corner Bakery";
// openingHour = 7;
// console.log(loafCount);
// let loafCount = 12;

let secondBakeryName = "Maison Sarah";
secondBakeryName = "The Corner Bakery";
// const values cannot be changed so i changed const to let because bakeryName is reassigned later.

let openingHour = 7;
// JavaScript does not allow creating variables without declaration so i declared openingHour with let before assigning a value.

let loafCount = 12;
console.log(loafCount);
// Moved console.log after loafCount was declared.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 5;
let b = 10;

let temporary = a;

a = b;

b = temporary;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
