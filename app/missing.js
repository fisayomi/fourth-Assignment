function findMissing(arr1,arr2){
  function add(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
      count += array[i];
    }
    return count;
  }
  
  var val1 = add(arr1);
  var val2 = add(arr2);
  
  if(val2 > val1){
    return val2 - val1;
  }
  
  else return val1 - val2;
}

module.exports = {findMissing:findMissing}