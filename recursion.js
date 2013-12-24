var range = function (start, end) {
  if (start === end) {
    return [start];
  }

  return [start].concat(range(start + 1, end));
};

// console.log(range(1,5));

var recursiveSum = function (arr){
  if ( arr.length === 0 ){
    return 0;
  }else if( arr.length === 1){
    return arr[0];
  }
  return arr[0] + recursiveSum(arr.slice(1));
};

// console.log(recursiveSum([1,2,3]));

var exp1 = function (b, n){
  if( n === 0 ){
    return 1;
  }
  return b * exp1(b, n - 1);
}

// console.log(exp1(2, 5));

var exp2 = function (b, n){
  if (n === 0){
    return 1;
  }

  if (n % 2 === 0){
    var temp = exp2(b, n / 2);
    return temp * temp;
  }else{
    var temp = exp2(b, ((n - 1) / 2));
    return b * (temp * temp);
  }
};

// console.log(exp2(2, 5));

var fibonacci = function(num){
  if (num === 0){
    return [];
  }else if (num === 1){
    return [0];
  }else if (num === 2){
    return [0, 1];
  }
  var fibs = fibonacci(num - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
};

// console.log(fibonacci(5));

var bSearch = function (array, target) {
  if ( array.length === 0 ) {
    return null;
  }

  mid_index = Math.floor(array.length / 2);
  var mid = array[mid_index];
  if (mid === target) {
    return mid_index;
  } else if (mid > target) {
    var start_index = 0;
    var index = bSearch(array.slice(0, mid_index), target);
  } else {
    var start_index = mid_index + 1;
    var index = bSearch(array.slice(start_index, array.length), target);
  }

  if (index === null) {
    return null;
  } else {
    return start_index + index;
  }

};

// a = [0,1,2,3,4,5,6,7,8]
// console.log(bSearch(a, 7));
// console.log(bSearch(a, 2));
// console.log(bSearch(a, 0));
//
// b = [0,1,2,3,4,5,6,7,8,9];
// console.log(bSearch(b, -1));
// console.log(bSearch(b, 4));
// console.log(bSearch(b, 3));