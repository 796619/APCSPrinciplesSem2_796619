function loadArray{
  var randomInt;
  //number of compares
  //number of swaps
  //number of milliseconds
  //this is all in the load Array function
}



function mySort{
  var[] arr = 100;
  for(var i = 0; i < arr.length -1; i++){
    for(var j = 1; j < i; j--){
      if(arr[] < i){
        swap(arr[]);
      }
    }
  }
}



function bubbleSort{
for (var i=1; i<records.length; i++){
        for (var j=records.length; j<1; j--){
            if (parseInt(records[i-1]) < parseInt(records[i])){
                var temp = records[i-1];
                records[i-1] = records[i]
                records[i] = temp;
            }
        }
    }
}



function selectSort(arr, left, right){
for(var i= left; i < right; ++i){
    var min = i;
    for (var j = i; j < right; ++j){
        if (arr[min] > arr[j]){
        min = j;
        }
    }
var temp = arr[min];
arr[min] = arr[i];
arr[i] = temp;
}
return arr;
}



function insertionSort(array) {
  var length = array.length;
  for(var i = 1, j; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}
