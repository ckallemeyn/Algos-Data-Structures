var swap = (arr, idx1, idx2)=> {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

var selectionSort = (arr) => {
  //create a variable to store the minimum value
  var min;
  // iterate over the array and create first pointer
  for (var i = 0; i < arr.length; i++) {
    // set min to the first index pointer
    min = i;
    // create secondary pointer to use for comparison
    for (var j = i + 1; j < arr.length; j++) {
      // if the element at the second pointer is lower than the min
      if (arr[j] < arr[min]) {
        // set the minimum index to that pointer
        min = j;
      }
    }
    // if the starting index and the minimum value index are not the same
    if (i !== min) {
      // swap them
      swap(arr, i, min);
    }
  }
  // return the array
  return arr;
}

