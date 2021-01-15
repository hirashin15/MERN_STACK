// /**
//  * Sorts an array by comparing adjacent values and swapping.
//  * 
//  * @param {number[]} arr an UNSORTED array of numbers
//  * @returns {number[]} the INPUT array (ie. sorts "in place")
//  * BONUS: fast exit if portion already sorted
//  */

// function bubbleSort(arr) {
//   let temp;
//   for(var i=0; i<arr.length -1; i++){
//     for(var j=i; j<arr.length; j++){
//       if(arr[j+1] > arr[j]){
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
// // should log [1, 2, 3, 4, 5, 8]


// /**
//  * Sorts an array by cycling through and selecting the minimum value.
//  * 
//  * @param {number[]} arr an UNSORTED array of numbers
//  * @returns {number[]} the INPUT array (ie. sorts "in place")
//  */

// function selectionSort(arr) {
//   let temp;
//   for(var i=0; i<arr.length -1; i++){
//     for(var j=1; i<arr.length; j++){
//       if(arr[j] < arr[i]){
//         temp = arr[j];
//       }
//     }
//     arr[j] = arr[i];
//     arr[i] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([1, 5, 2, 8, 3, 4]));
// // should log [1, 2, 3, 4, 5, 8]

// /**
//  * Sorts an array by traversing backwards to find each value's correct position.
//  * 
//  * @param {number[]} arr an UNSORTED array of numbers
//  * @returns {number[]} the INPUT array (ie. sorts "in place")
//  */

// function insertionSort(arr) {
//   //loop thru an array of numbers
//   for(let i=0; i<arr.length;i++){
//     //taking the number at the next index and comparing with the numbers before it
//     let temp;
//     // loop backwards
//     for(let j=i+1; j>0; j--){
//       //comparing temp with the previous number
//       if(arr[j]<arr[j-1]){
//         temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// // should log [1, 2, 3, 4, 5, 8]


/**
 * Sorts an array of objects according to an array of keys.
 * 
 * @param {Object[]} arr an UNSORTED array of objects
 * @param {string[]} keys an array of keys to sort by
 * 
 * Use any of the sorting algos we've covered thus far.
 */

function multiKeySort(arr, keys) {
  for(let key in keys) {
    
  }
}

console.log(multiKeySort([
  {
    firstName: 'Lee',
    lastName: 'Babba'
  },
  {
    firstName: 'Lee',
    lastName: 'Abba'
  },
  {
    firstName: 'Adam',
    lastName: 'Smith'
  }
], ['firstName', 'lastName']));

// should log [
//   {
//     firstName: 'Adam',
//     lastName: 'Smith'
//   },
//   {
//     firstName: 'Lee',
//     lastName: 'Abba' },
//   {
//     firstName: 'Lee',
//     lastName: 'Babba'
//   }
// ]