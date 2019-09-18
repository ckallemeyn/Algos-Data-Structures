/*
input: an array and target value
output: a number representing the index of the target value, or -1 if not found
constraints: none
edge cases: what if the array is an empty array? return -1
what if the target value is undefined? return -1

justification: Linear search should be used to find the index of a target an element inside of a given array.

explanation: The input array and target value are tested inside the function to see if the target value is found within the input array. If it is the index number should be returned otherwise the output should be -1 meaning that the element is not found in the array.

visualization:

linearSearch(['cat','dog','elephant','rabbit'], 'dog') returns 1
linearSearch([2,5,6,89,32,51,64], 32) returns 4
linearSearch([2,5,6,89,32,51,64], 37) returns -1
*/

var linearSearch = (arr, target) => {
  //edge case
  if (arr.length === 0) {
    return -1;
  }
  // iterate through input array
  for (var i = 0; i < arr.length; i++) {
    // if the target value matches the input return the index
    if (arr[i] === target) {
      return i;
    }
  }
  // otherwise return -1
  return -1
}