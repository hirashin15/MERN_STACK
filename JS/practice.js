/**
 * Sorts an array by comparing adjacent values and swapping.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
  let temp;
  for(var i=0; i<arr.length -1; i++){
    for(var j=i; j<arr.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]


/**
 * Sorts an array by cycling through and selecting the minimum value.
 * 
 * @param {number[]} arr an UNSORTED array of numbers
 * @returns {number[]} the INPUT array (ie. sorts "in place")
 */

function selectionSort(arr) {
  let temp;
  for(var i=0; i<arr.length -1; i++){
    for(var j=1; i<arr.length; j++){
      if(arr[j] < arr[i]){
        temp = arr[j];
      }
    }
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]