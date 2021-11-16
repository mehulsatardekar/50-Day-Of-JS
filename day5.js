// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
// indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
// If the match is not found, these methods return -1

const str = "XeroX";

function getTheGapX(str) {
  // write your solution here
  let count;
  let startPosition = str.indexOf("X");
  let endPosition = str.lastIndexOf("X");
  if (startPosition === -1 && endPosition === -1) {
    count = -1;
  } else if (startPosition > 0 || endPosition === -1) {
    count = 0;
  }

  if (startPosition > -1 && endPosition > -1) {
    console.log("in here");
    count = endPosition - startPosition;
  }
  return count;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);

// getTheGapX('XeroX') returns 4
// getTheGapX('Xamarin') returns 0
// getTheGapX('JavaScript') returns -1
// getTheGapX("F(X) !== G(X) !== F(X)") returns 18
