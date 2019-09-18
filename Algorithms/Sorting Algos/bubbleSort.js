var swap = function(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2]
  arr[index2] = temp;
}

// ES6 version of in-line swapping using destructuring
// const newerSwap = (arr, idx1, idx2) => {
//   return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

var bubbleSort = function(array) {
  var noSwaps;
  // edge case
  if (array.length <= 1) {
    return array;
  }
  // create a loop that starts at the end of the array
  for (var i = array.length; i > 0; i--) {
    noSwaps = true;
    // create an inner loop that starts at the beginning of the array
    for (var j = 0; j < i - 1; j++) {
        console.log('this is one pass through');
      // check and see if the first value is greater than the second
      if (array[j] > array[j+1]) {
        // if it is then swap the values
        swap(array, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  // return the array
  return array;
};

// console.log(bubbleSort([1,4,3,2,6,5,7]));
// console.log(bubbleSort([7,4,8,2,6,5,1]));
// console.log(bubbleSort([-7,-4,-8,-2,-6,-5,-1]));
// console.log(bubbleSort([1,2,3,4,6,5,7,8]));