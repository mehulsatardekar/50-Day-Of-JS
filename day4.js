// Write a function which can convert the time input given in 12 hours format to 24 hours format
// The check for 'AM' and 'PM' can be verified using endsWith String method
// An extra 0 would be needed if the hours have single digit

const time = "12:10AM";

function convertTo24HrsFormat(time) {
  // write your solution here
  let hour = time.substr(0, time.indexOf(":"));
  let isPM = time.endsWith("PM");
  let timeConvention, minutes;
  if (isPM) {
    timeConvention = "PM";
  } else {
    timeConvention = "AM";
  }
  minutes = time.substr(
    time.indexOf(":") + 1,
    time.indexOf(timeConvention) - 3
  );
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  if (hour === "12") {
    hour = "00";
  }
  if (isPM) {
    hour = parseInt(hour) + 12;
    //   console.log(hour)
  }
  return `${hour}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);

// convertTo24HrsFormat("12:10AM") returns "00:10"
// convertTo24HrsFormat("5:00AM") returns "05:00"
// convertTo24HrsFormat("12:33PM") returns "12:33"
// convertTo24HrsFormat("01:59PM") returns "13:59"
