// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

const returnNegative = (num) => {
  if (num > 0) return -num;
  else return num;
};

console.log(returnNegative(-4));

// Examples
// returnNegative(4) ➞ -4

// returnNegative(15) ➞ -15

// returnNegative(-4) ➞ -4

// returnNegative(0) ➞ 0
