Array.prototype.timesTwo = function (){
  var result = [];
  for(var i = 0; i < this.length; i++) {
    result.push(this[i] * 2);
  }
  return result;
};

// console.log([1,2,3].timesTwo());

Array.prototype.myEach = function (fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i]);
  }

  return this;
};

var timesTen = function (num) {
  console.log(num * 10);
  return num * 10;
};

// console.log([1,2,3].myEach(timesTen));

Array.prototype.myMap = function (fn) {
  var result = [];
  var map_fn = function (x) {
    result.push(fn(x));
  };
  this.myEach(map_fn);

  return result;
};

// console.log([1,2,3].myMap(timesTen));
var sum = function (num1, num2){
  return num1 + num2;
}

Array.prototype.myInject = function (fn) {
  var accu = this[0];
  var arr = this.slice(1);
  arr.myEach(function(x){
    accu = fn(accu, x)
  });

  return accu;
}

console.log([1,2,3].myInject(sum));
