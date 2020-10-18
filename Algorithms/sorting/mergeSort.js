const merge = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

var mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Implementation using merge that does not use extra while loops
// const merge = (leftArr, rightArr) => {
//   let merged = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       merged.push(leftArr[leftIndex]);
//       leftIndex++;
//     } else {
//       merged.push(rightArr[rightIndex]);
//       rightIndex++;
//     }
//   }
//   return merged.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
// }
