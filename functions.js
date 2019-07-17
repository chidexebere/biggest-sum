/* This function sorts in ascending order */
const ascendSort = arr => arr.sort((m, n) => m - n);

/* This function sorts in decending order */
const decendSort = arr => arr.sort((m, n) => n - m);

/* This functions pair numbers in an array: 
if the number of integers left in the array after pariing is two; it returns them singely;
/* if one it returns that interger */
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

// A function that returns  the all negative integers in an array
const negNums = arr => arr.filter(num => num < 0);

//A function that returns all positive integers aside zero in an array
const posNums = arr => arr.filter(num => num > 0);

//A function that returns all zeros in an array
const zeroNums = arr => arr.filter(num => num == 0);

// A function that checks if the array conatains zero and returns a truthy value
const containsZero = arr => arr.some(num => num == 0);

// A function that checks if the number of zeros in an array is even and returns a truthy value
const evenNumsOfZeros = arr => arr.filter(num => num == 0).length % 2 == 0;

//A function that returns the biggest negative integer in an array
const biggestNegNum = arr => Math.max(...arr.filter(num => num < 0));

//A function that returns the smallest positive integer in an array
const smallestPosNum = arr => Math.min(...arr.filter(num => num > 0));

//A function that returns a truthy value if the integers in an array is odd
const isArrayOdd = arr => arr.length % 2 !== 0;

// A function that returns the sum of two integers in an array
const sum = arr => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

// A function that returns the biggest sum of integers in an array, after paring but without sorting
const biggest = arr => {
  const paired = getPaired(arr);
  return sumOfPairs(paired);
};

// A function that gets the best way to sort an array of four integers to get the biggest sum
const sortFor4 = arr => {
  let sortArr = [];
  let firstArr = biggest(ascendSort(arr));
  let secondArr = biggest(decendSort(arr));
  firstArr > secondArr
    ? sortArr.push(...ascendSort(arr))
    : sortArr.push(...decendSort(arr));

  return sortArr;
};

//A function that returns the last two integers in an array
const remove2 = arr => {
  let removed = [];
  removed.push(arr.pop());
  removed.push(arr.pop());
  return removed;
};

//A function that sorts in this order : negatives, positives.
const sortNegPos = arr => {
  let sortArr = [];
  sortArr.push(...ascendSort(negNums(arr)));
  sortArr.push(...decendSort(posNums(arr)));
  return sortArr;
};

//A function that sorts in this order : negatives, positives and zeros
const sortNegPosZero = arr => {
  let sortArr = [];
  sortArr.push(...ascendSort(negNums(arr)));
  sortArr.push(...decendSort(posNums(arr)));
  sortArr.push(...zeroNums(arr));
  return sortArr;
};

//A function that sorts in this order : positives, negatives.
const sortPosNeg = arr => {
  let sortArr = [];
  sortArr.push(...decendSort(posNums(arr)));
  sortArr.push(...ascendSort(negNums(arr)));
  return sortArr;
};

//A function that sorts in this order : positives, negatives and zeros
const sortPosNegZero = arr => {
  let sortArr = [];
  sortArr.push(...decendSort(posNums(arr)));
  sortArr.push(...ascendSort(negNums(arr)));
  sortArr.push(...zeroNums(arr));
  return sortArr;
};

/*This function sorts an array if its number of integers is even * */
const sortOddArrayWithEvenNeg = arr => {
  let sortArr = [];

  if (!containsZero(arr)) {
    sortArr.push(...sortNegPos(arr));
  } else {
    evenNumsOfZeros(arr)
      ? sortArr.push(
          ...ascendSort(negNums(arr)),
          ...zeroNums(arr),
          ...decendSort(posNums(arr))
        )
      : sortArr.push(...sortNegPosZero(arr));
  }
  return sortArr;
};

/* This function sorts an array if its number of integers is odd */
const sortOddArrayWithOddNeg = arr => {
  let sortArr = [];
  let biggestNeg = biggestNegNum(arr);
  let smallestPos = smallestPosNum(arr);

  if (!containsZero(arr)) {
    arr.splice(arr.indexOf(biggestNeg), 1);
    sortArr.push(...sortNegPos(arr), biggestNeg);
  } else {
    if (evenNumsOfZeros(arr)) {
      sortArr.push(...sortPosNegZero(arr));
    } else {
      arr.splice(arr.indexOf(smallestPos), 1);
      sortArr.push(...sortPosNegZero(arr), smallestPos);
    }
  }
  return sortArr;
};

const sortEvenArrayWithEvenNeg = arr => {
  let sortArr = [];
  let smallestPos = smallestPosNum(arr);

  if (!containsZero(arr)) {
    if (arr.length == 4) {
      sortArr.push(...sortFor4(arr));
    } else {
      let last4 = [];
      neg = ascendSort(negNums(arr));
      last2Neg = remove2(neg);
      pos = decendSort(posNums(arr));
      last2Pos = remove2(pos);
      last4.push(...last2Neg, ...last2Pos);
      sortedLast4 = sortFor4(last4);
      sortArr.push(...neg, ...pos, ...sortedLast4);
    }
  } else {
    if (evenNumsOfZeros(arr)) {
      sortArr.push(...sortNegPosZero(arr));
    } else {
      arr.splice(arr.indexOf(smallestPos), 1);
      sortArr.push(...sortPosNegZero(arr), smallestPos);
    }
  }
  return sortArr;
};

/* This function sorts an array if its number of integers is odd */
const sortEvenArrayWithOddNeg = arr => {
  let sortArr = [];
  let biggestNeg = biggestNegNum(arr);
  let smallestPos = smallestPosNum(arr);

  if (!containsZero(arr)) {
    arr.splice(arr.indexOf(biggestNeg), 1);
    sortArr.push(...sortNegPos(arr), biggestNeg);
  } else {
    if (evenNumsOfZeros(arr)) {
      arr.splice(arr.indexOf(smallestPos), 1);
      arr.splice(arr.indexOf(biggestNeg), 1);
      arr.splice(arr.indexOf(0), 1);
      sortArr.push(biggestNeg, 0, ...sortPosNegZero(arr), smallestPos);
    } else {
      arr.splice(arr.indexOf(biggestNeg), 1);
      arr.splice(arr.indexOf(0), 1);
      sortArr.push(biggestNeg, 0, ...sortNegPosZero(arr));
    }
  }
  return sortArr;
};

/* This function sorts an odd array with positive integers and contain even number of zeros */
const sortPosOddArrayWithOddZeros = arr => {
  let sortArr = [];
  let smallestPos = smallestPosNum(arr);
  arr.splice(arr.indexOf(smallestPos), 1);
  sortArr.push(...decendSort(arr), smallestPos);
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

    let numsOfNegNumIsOdd = arr.filter(num => num < 0).length % 2 !== 0;

    if (containsNonIntegers) {
      throw new Error("Your array should contain only integers");
    } else {
      if (allNegInt) {
        sortedArr = ascendSort(arr);
      } else if (allPosInt) {
        isArrayOdd(arr) && evenNumsOfZeros(arr)
          ? (sortedArr = sortPosOddArrayWithOddZeros(arr))
          : (sortedArr = decendSort(arr));
      } else {
        if (isArrayOdd(arr)) {
          numsOfNegNumIsOdd
            ? (sortedArr = sortOddArrayWithOddNeg(arr))
            : (sortedArr = sortOddArrayWithEvenNeg(arr));
        } else {
          numsOfNegNumIsOdd
            ? (sortedArr = sortEvenArrayWithOddNeg(arr))
            : (sortedArr = sortEvenArrayWithEvenNeg(arr));
        }
      }
      const paired = getPaired(sortedArr);
      return sumOfPairs(paired);
    }
  }
}

module.exports = biggestSum;
