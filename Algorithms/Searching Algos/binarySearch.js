/*
input: an array and target value
output: a number representing the index of the target value, or -1 if not found
constraints: none
edge cases: what if the array is an empty array? return -1
what if the target value is undefined? return -1

justification: Binary search should be used to find the index of a target an element inside of a given array. This searching algorithm uses a divide and conquer approach to cut down the search time of the target element.

explanation: The input array and target value are tested inside the function to see if the target value is found within the input array. If it is the index number should be returned otherwise the output should be -1 meaning that the element is not found in the array.

visualization:

binarySearch([1,2,3,4,5,6,7,8,9,10,13,15,16,18], 13) returns 10
binarySearch([20,30,40,50,60,70], 60) returns 4
*/

var binarySearch = (sortedArr, target) => {
  var left = 0;
  var middle;
  var right = sortedArr.length -1;
  // while the left pointer comes before the right pointer
  while (left <= right) {
    // assign the middle value to be in between the two indexes
    middle = Math.floor((left + right) / 2);
    // if the target value is found return the index
    if (sortedArr[middle] === target) {
      return middle;
      // if the value is too small then move the left pointer up
    } else if (sortedArr[middle] < target) {
      left = middle + 1;
      // if the value is too large then move the right pointer down
    } else if (sortedArr[middle] > target) {
      right = middle - 1;
    }
  }
  // otherwise return -1
  return -1;
}
