var getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

var digitCount = (num) => {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

var mostDigits = (arr) => {
  var maxDigits = 0;
  for (var i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

var radixSort = (arr) => {
  var maxDigitCount = mostDigits(arr);
  for (var i = 0; i < maxDigitCount; i++) {
    var buckets = Array.from({length: 10}, () => []);
    for (var j = 0; j < arr.length; j++) {
      var digits = getDigit(arr[j], i);
      buckets[digits].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}