// Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  // write your solution here

  return Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);

// randomNumberGeneratorInRange(10, 50) should return a number between 10-50 (inclusive)
// randomNumberGeneratorInRange(100, 200) should return a number between 100-200 (inclusive)
