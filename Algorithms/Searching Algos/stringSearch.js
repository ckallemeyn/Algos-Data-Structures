var stringSearch = (str1, str2) => {
  var matches = 0;

  for(var i = 0; i < str1.length; i++){
    for (var j = 0; j < str2.length; j++) {
      if (str1[i+j] !== str2[j]) {
        break;
      }
      if (j === str2.length - 1) {
        matches++;
      }
    }
  }
  return matches;
}

// stringSearch('She can carry two cars', 'car') returns 2