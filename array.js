var uniq = function (arr){
  result = []
  for(var i = 0; i < arr.length; i++){
    if(result.indexOf(arr[i]) === -1){
      result.push(arr[i]);
    }
  }
  return result;
};

var twoSum = function (arr){
  result = []
  for(var i = 0; i < arr.length; i++){
    for(var j = (i + 1); j < arr.length; j++){
      if( arr[i] + arr[j] === 0 ){
        result.push([i, j]);
      }
    }
  }
  return result;
};

var transpose = function (arr){
  result = [];
  for(var i = 0; i < arr.length; i++){
    row = [];
    for(var j = 0; j < arr.length; j++){
      row.push(arr[j][i]);
    }
    result.push(row);
  }
  return result;
};