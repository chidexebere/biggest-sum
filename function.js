function biggestSum(arr) {
  //sort in ascending order
  const ascendSort = arr => arr.sort((m, n) => m - n);

  //sort in decending order
  const decendSort = arr => arr.sort((m, n) => n - m);

  //checks if array contains negative numbers
  const containsNeg = arr => arr.some(num => num < 0);

  // pair numbers
  const getPaired = arr => {
    const pair = [];
    for (let i of arr) {
      if (arr.length !== 1) {
        [a, b, ...arr] = arr;
        if (arr.length == 0) {
          pair.push([a, b]);
          break;
        } else {
          pair.push([a, b]);
        }
      } else {
        pair.push(arr[arr.length - 1]);
        break;
      }
    }
    return pair;
  };

  //Sum of multiplied pairs
  const sumOfPairs = arr => {
    arr.reduce(
      (acc, cur) => acc + (Array.isArray(cur) ? cur[0] * cur[1] : cur),
      0
    );
  };

  containsNeg(arr)
    ? (sortedArr = ascendSort(arr))
    : (sortedArr = decendSort(arr));

  const paired = getPaired(sortedArr);
  return sumOfPairs(paired);
}

module.exports = biggestSum;
