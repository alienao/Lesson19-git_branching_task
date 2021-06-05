// Write a function that makes the first number as large as possible by
// swapping out its digits for digits in the second number.
// maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
// maxPossible(523, 76) ➞ 763
// maxPossible(9132, 5564) ➞ 9655
// maxPossible(8732, 91255) ➞ 9755

function maxPossible(number1, number2) {
  number1 = number1.toString();
  number2 = number2
    .toString()
    .split("")
    .sort((a, b) => b - a);
  let maxNumber = "";
  let j = 0;
  for (let i = 0; i < number1.length; i++) {
    if (typeof number2[j] === "undefined") {
      maxNumber += number1.slice(i);
      return maxNumber;
    } else if (number1[i] > number2[j]) {
      maxNumber += number1[i];
    } else {
      maxNumber += number2[j];
      j++;
    }
  }
  return maxNumber;
}

console.log(maxPossible(9132, 5564)); //6554
console.log(maxPossible(523, 76)); //763
console.log(maxPossible(8732, 91255));
