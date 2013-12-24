var bubbleSort = function (array) {
  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length - 1; i++) {

      if (array[i] > array[i+1]) {
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        sorted = false;
      }
    }
  }

  return array;
};

// console.log(bubbleSort([5,4,3,2,1]));

var substrings = function (string) {
  var result = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      result.push(string.substring(i, j));
    }
  }

  return result;
};

console.log(substrings("cat"));