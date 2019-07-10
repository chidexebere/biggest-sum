/* This function sorts in ascending order */
const ascendSort = arr => arr.sort((m, n) => m - n);

/* This function sorts in decending order */
const decendSort = arr => arr.sort((m, n) => n - m);

/* This functions pair numbers in an array: 
if the number of integers left in the array after pariing is two; it returns them singely;
/* if one it return the last interger */
const getPaired = arr => {
  let pair = [];

  for (let i of arr) {
    if (arr.length == 1) {
      pair.push(arr[0]);
      break;
    } else if (arr.length == 2) {
      [a, b, ...arr] = arr;
      pair.push(a, b);
      break;
    } else {
      [a, b, ...arr] = arr;
      pair.push([a, b]);
    }
  }
  return pair;
};

/*This function sums the multiplied pairs */
const sumOfPairs = arr => {
  return arr.reduce(
    (acc, cur) => acc + (Array.isArray(cur) ? cur[0] * cur[1] : cur),
    0
  );
};

/*This function sorts an array if its number of integers is even * */
const sortOddArrayWithEvenNeg = arr => {
  //gets the all negative integers in an array and assigns to negNums
  let negNums = arr.filter(num => num < 0);

  //sort negNums in ascending order and assigns to sortedNegNums
  let sortedNegNums = ascendSort(negNums);

  //gets the all positive integers in an array and assigns to posNums
  let posNums = arr.filter(num => num >= 0);

  //checks if the number of zeros in an array is even and assigns the truthy value to evenNumsOfZeros
  let evenNumsOfZeros = posNums.filter(num => num == 0).length % 2 == 0;

  let sorted = [];
  sorted.push(...sortedNegNums);
  sortedPosNums = evenNumsOfZeros ? ascendSort(posNums) : decendSort(posNums);
  sorted.push(...sortedPosNums);
  return sorted;
};

/* This function sorts an array if its number of integers is odd */
const sortOddArrayWithOddNeg = arr => {
  //finds the smallest positive integer in an array and assigns to smallestPosNum
  let smallestPosNum = Math.min(...arr.filter(num => num >= 0));

  //finds the biggest negative integer in an array and assigns to biggestNegNum
  let biggestNegNum = Math.max(...arr.filter(num => num < 0));

  //checks if the number of negative integers in an array is equal to one and assigns the truthy value to numsOfNegNumIsOne
  let numsOfNegNumIsOne = arr.filter(num => num < 0).length == 1;

  //checks if the number of zeros in an array is even and assigns the truthy value to evenNumsOfZeros
  let evenNumsOfZeros = arr.filter(num => num == 0).length % 2 == 0;

  let sortArr = [];

  if (evenNumsOfZeros && numsOfNegNumIsOne) {
    sortArr.push(...decendSort(arr));
  } else {
    sortArr.push(smallestPosNum, biggestNegNum);
    arr.splice(arr.indexOf(smallestPosNum), 1);
    arr.splice(arr.indexOf(biggestNegNum), 1);
    sortArr.push(...sortOddArrayWithEvenNeg(arr));
  }
  return sortArr;
};

/* The main function that returns the biggest possible sum from the input array */
function biggestSum(arr) {
  //checks if the input is an array and assigns the truthy value to listNotAnArray
  let listNotAnArray = !Array.isArray(arr);

  if (listNotAnArray) {
    throw new Error("Your input list should be an array");
  } else {
    let allNegInt = arr.every(num => num < 0);
    let allPosInt = arr.every(num => num >= 0);
    let containsNonIntegers = arr
      .map(num => !Number.isInteger(num))
      .includes(true);
    let containsAllintegers =
      arr.some(num => num < 0) && arr.some(num => num >= 0);
    let isArrayOdd = arr.length % 2 !== 0;
    let numsOfNegNumIsOdd = arr.filter(num => num < 0).length % 2 !== 0;

    if (containsNonIntegers) {
      throw new Error("Your array should contain only integers");
    } else {
      if (allNegInt) {
        sortedArr = ascendSort(arr);
      } else if (allPosInt) {
        sortedArr = decendSort(arr);
      } else if (containsAllintegers) {
        isArrayOdd && numsOfNegNumIsOdd
          ? (sortedArr = sortOddArrayWithOddNeg(arr))
          : (sortedArr = sortOddArrayWithEvenNeg(arr));
      }
      const paired = getPaired(sortedArr);
      return sumOfPairs(paired);
    }
  }
}

module.exports = biggestSum;
