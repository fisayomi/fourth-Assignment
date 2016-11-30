function findMissing(arr1,arr2){
  // a function that add all elements in a given array
  function add(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
      count += array[i];
    }
    return count;
  }
  
  var arr1Numbers = add(arr1);
  var arr2Numbers = add(arr2);
  
  if(arr2Numbers > arr1Numbers){
    return arr2Numbers - arr1Numbers;
  }
  
  else return arr1Numbers - arr2Numbers;
}

module.exports = {findMissing:findMissing}