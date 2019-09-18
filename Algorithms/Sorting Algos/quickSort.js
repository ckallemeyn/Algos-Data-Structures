var pivot = (arr, start=0, end=arr.length+1) => {
  var swap = (array, i, j) => {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

var quickSort = (arr, left = 0, right = arr.length -1) => {
  if (left < right) {
    var pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx+1, right);
  }
  return arr;
}
