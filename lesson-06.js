"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = [
  "Sourdough Loaf",
  "Croissant",
  "Baguette",
  "Cinnamon Roll",
  "Chocolate Cake",
];

console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Blueberry Muffin"); // push() adds an item to the end of the array.
console.log(menu);

menu.unshift("Pretzel"); // unshift() adds an item to the beginning of the array.
console.log(menu);

menu.pop(); // pop() removes the last item from the array.
console.log(menu);

menu.shift(); // shift() removes the first item from the array.
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (const item of menu) {
  console.log(item);
}
// Use a counting for loop when you need the index.
// Use a for...of loop when you only need the values.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayPrices = prices.map((price) => `${price.toFixed(2)}€`);
console.log(displayPrices);

const cheapPrices = prices.filter((price) => price < 5);
console.log(cheapPrices);

const expensivePrice = prices.find((price) => price > 10);
console.log(expensivePrice);

// forEach() would return undefined because it performs an action instead of creating or returning a new value.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
];
artists.push("Ed Sheeran"); // I only added a new artist to the array. The loop did not need to change because it automatically processes every item.

for (const artist of artists) {
  console.log(`Artist: ${artist}
Have a great show!`);
}

// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const secondMenu = menu;

secondMenu.push("Blueberry Muffin");

console.log(menu);
console.log(secondMenu);

const copiedMenu = [...menu];

copiedMenu.push("Apple Pie");

console.log(menu.length);
console.log(secondMenu.length);
console.log(copiedMenu.length);
// Assigning an array to another variable shares the same reference, but the spread operator creates an independent copy.

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

const numbers = [12, 5, 41, 8, 33, 2, 27];

let sum = 0;

for (const number of numbers) {
  sum = sum + number;
}

console.log(sum);

let largest = numbers[0];

for (const number of numbers) {
  if (number > largest) {
    largest = number;
  }
}

console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

const text = "bread";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed = reversed + text[i];
}

console.log(reversed);

const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (const letter of text.toLowerCase()) {
  if (vowels.includes(letter)) {
    vowelCount++;
  }
}

console.log(vowelCount);

function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

function isPalindrome(word) {
  const lowerWord = word.toLowerCase();

  return lowerWord === reverseString(lowerWord);
}

console.log(isPalindrome("Level"));
console.log(isPalindrome("Bread"));
console.log(isPalindrome("Bakery"));

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
