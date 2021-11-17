// Create a regular expression to validate if the given input is valid Indian mobile number or not
// Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
// test method of regular expression can be used to validate if the mobile number pattern matches or not

const number = "+919876543210";

function validateMobile(number) {
  // write your solution here
  const reg = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/g;

  return reg.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`);

// validateMobile('+919876543210') returns true
// validateMobile('+91 9876543210') returns true
// validateMobile('09876543210') returns true
// validateMobile('9876543210') returns true
// validateMobile('99876543210') returns false
