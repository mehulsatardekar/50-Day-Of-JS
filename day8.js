// Write a function which accepts two valid dates and returns the difference between them as number of days
// The difference between 2 dates in JavaScript will give the time difference in milliseconds
// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds

// const date1 = new Date("10/15/2020");
// const date2 = new Date("12/1/2020");

// const res = date2.getTime() - date1.getTime();
// console.log(res / (1000 * 3600 * 24));

const getDaysBetweenDays = (dateText1, dateText2) => {
  let date1 = new Date(dateText1);
  let date2 = new Date(dateText2);
  let diffInTime = date2.getTime() - date1.getTime();
  let diffInDays = diffInTime / (1000 * 3600 * 24);
  return diffInDays;
};

console.log(
  `th difference of days are = ${getDaysBetweenDays("10/15/2020", "12/1/2020")}`
);

// getDaysBetweenDates('10/15/2020', '12/1/2020') returns 47
// getDaysBetweenDates('11/10/2021', '11/12/2021') returns 2
// getDaysBetweenDates('11/01/2020', '11/05/2020') returns 4
