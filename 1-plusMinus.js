// Given an array of integers, calculate the ratios of its elements that are \
// , negative, and zero. Print the decimal value of each fraction on a new line with  
// places after the decimal.

// Note: This challenge introduces precision problems. 
// The test cases are scaled to six decimal places, 
// though answers with absolute error of up to  are acceptable.

const arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
  let countPositive = 0;
  let countNegative = 0;
  let countZero = 0;
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPositive++;
    } else if (arr[i] < 0) {
      countNegative++;
    } else {
      countZero++;
    }
  }
  console.log((countPositive / len).toFixed(6));
  console.log((countNegative / len).toFixed(6));
  console.log((countZero / len).toFixed(6));
}
plusMinus(arr);
