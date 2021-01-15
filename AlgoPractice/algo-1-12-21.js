// /**
//  * Creates a union (elements in either) from two sorted arrays.
//  * 
//  * @param {number[]} arr1 a SORTED array of numbers
//  * @param {number[]} arr2 a SORTED array of numbers
//  * @returns {number[]} a NEW SORTED array with elements from either
//  */

// function unionSortedArrays(arr1, arr2) {
//     let result = [];
//     let p1 = 0;
//     let p2 = 0;
//     while (p1 < arr1.length && p2 < arr2.length) {
//         if (arr1[p1] === arr2[p2]) {
//             result.push(arr1[p1]);
//             p1++;
//             p2++;
//         } else if (arr1[p1] < arr2[p2] ) {
//             result.push(arr1[p1]);
//             p1++;
//         } else if (arr1[p1] > arr2[p2] ) {
//             result.push(arr2[p2]);
//             p2++;
//         }
//     }
//     while(p1 < arr1.length) {
//         result.push(arr1[p1]);
//         p1++;
//     }
//     while(p2 < arr2.length) {
//         result.push(arr2[p2]);
//         p2++;
//     }
//     // if(p1 === arr1.length) {
//     //   for (let i = p2; i < arr2.length; i++) {
//     //       result.push(arr2[i]);
//     //   }
//     // }
//     // if(p2 === arr2.length) {
//     //   for (let i = p1; i < arr1.length; i++) {
//     //       result.push(arr1[i]);
//     //   }
//     // }
//     // whichever array did not finished iterating all the way through
//       //iterate to completion and push ALL numbers
// return result;
// }

// console.log(unionSortedArrays([1, 2, 2], [2, 3, 3]));
// // should log [1, 2, 2, 3, 3] 
// console.log(unionSortedArrays([1, 2], [3, 4]));
// // should log [1, 2, 3, 4]


/**
 * BONUS: ensure that the output array has only unique numbers
 * 
 * @param {number[]} arr1 a SORTED array of numbers
 * @param {number[]} arr2 a SORTED array of numbers
 * @returns {number[]} a NEW SORTED array with elements from either
 */

function unionSortedArraysDedupe(arr1, arr2) {
  // your code
    let result = [];
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
          if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++;
          p2++;  
      } else if (arr1[p1] < arr2[p2] ) {
        if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++; 
      } else if (arr1[p1] > arr2[p2] ) {
        if ( arr2[p2] !== result[result.length-1]) {
            result.push(arr2[p2]);
          } 
          p2++;  
      }
    }
    while(p1 < arr1.length) {
        if ( arr1[p1] !== result[result.length-1]) {
            result.push(arr1[p1]);
          } 
          p1++;
    }
    while(p2 < arr2.length) {
        if ( arr2[p2] !== result[result.length-1]) {
          console.log(result[result.length-1]);
            result.push(arr2[p2]);
          } 
          p2++;  
    }
      return result;
}

console.log(unionSortedArraysDedupe([1, 2, 2, 3, 3, 3, 10, 13], [2, 3, 3, 5, 5, 7, 8]));
// should log [1, 2, 3]


// /**
//  * Calculates the absolute difference between the sum of two diagonals.
//  * 
//  * @param {Array<Array<number>>} twoDArray a 2-dimensional array of numbers
//  * Note that the outer and inner arrays will all be equal in length.
//  */

// function diagonalDifference(twoDArray) {
//   // your code here
// }

// Math.abs(5 - 10); // returns 5

// console.log(diagonalDifference([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]));
// // should log 0: (1 + 5 + 9) - (3 + 5 + 7)ray a 2-dimensional array of numbers
//  * Note that the outer and inner arrays will all be equal in length.
//  */


