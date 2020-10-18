var insertionSort = (arr) => {
  // create a variable to store the minimum value
  var currentVal;
  var j;
  // iterate through the array starting at index 1 not zero
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    j = i - 1;
    console.log(arr);
    while(j >= 0 && arr[j] > currentVal) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = currentVal;
  }
  // return the array
  return arr;
}



insertionSort([3,2,7,1,5,4,7,9,54,34,21,6]);