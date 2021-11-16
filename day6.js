// Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words

const str1 = "JavaScript is simple";
const wordLimit1 = 3;

const str2 = "Codedamn is the best place to learn to code";
const wordLimit2 = 5;

function truncateWithWordLimit(str, wordLimit) {
  let res = "";
  let arr = str.split(" ");
  for (let a = 0; a < wordLimit; a++) {
    if (res === undefined) {
      res = "";
    }
    res = `${res} ${arr[a]}`;
  }
  return `${res.trimStart()}`;
}
console.log(`Truncated string: ${truncateWithWordLimit(str1, wordLimit1)}`);
console.log(`Truncated string: ${truncateWithWordLimit(str2, wordLimit2)}`);

// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"
