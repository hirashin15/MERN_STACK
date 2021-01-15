/**
 * Creates an array of elements that ONLY show up in one of the input arrays.
 * 
 * @param {number[]} arr1 an UNSORTED array of numbers
 * @param {number[]} arr2 an UNSORTED array of numbers
 * @returns {number[]} a new UNSORTED array with elements that are only in one of the inputs
 * BONUS: allow it to take in a 2D array
 */

// AKA symmetric difference

function disjunctiveUnion(arr1, arr2) {
  let dict = {};
  let newArray = [];
  for(let i in arr1) {
    if(dict.hasOwnProperty(arr1[i])) {
      dict[arr1[i]] += 1;
    } else {
      dict[arr1[i]] = 0;
    }
  }
  for(let j in arr2) {
    if(dict.hasOwnProperty(arr2[j])) {
      dict[arr2[j]] += 1;
    } else {
      dict[arr2[j]] = 0;
    }
  }
  for(let key in dict) {
    if(dict[key] === 0) {
      newArray.push(key);
    }
  } 
  return newArray;
}



console.log(disjunctiveUnion([4, 2], [4, 1]));
// should log [] since 1 and 2 are in both

console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
// should log [3]


/**
 * BONUS: Creates an array of elements that ONLY show up in one of the nested arrays.
 * 
 * @param {Array<Array<number>>} arr a nested array of UNSORTED numbers
 * @returns {number[]} a new array with elements that are only in one of the inner arrays
 */

// function disjunctiveUnionBonus(arr) {
//   // your code here
// }

// console.log(disjunctiveUnionBonus([
//   [1, 2, 3],
//   [4, 5, 6],
//   [1, 2, 5, 6]
// ]));
// should log [3, 4] or [4, 3]