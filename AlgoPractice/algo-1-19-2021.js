/**
 * Returns a 2D array from a single object.
 * 
 * @param {Object} obj an object of key/value pairs
 * @returns {Array<Array<any>>} A 2D array of keys and values
 */

const input1 = {
  firstName: 'Foo',
  lastName: 'Bar',
  age: 13
};

// const someProp = 'firstName';
// obj.hasOwnProperty(someProp); // returns true

function entries(obj) {
  //create an empty array
  const newArray = [];
  // for each item in object
  for (let key in obj) {
    //push in [key, value]
    newArray.push([key, obj[key]]);
  }

  //return the array
  return newArray;
}

console.log(entries(input1));
// should log [['firstName', 'Foo'], ['lastName', 'Bar'], ['age', 13]]

console.log(entries({ prop1: 'val 1', prop2: 'val 2' }));
// should log [['prop1', 'val 1'], ['prop2', 'val 2']]

/**
* BONUS
* Returns a SQL insert query statement from an object.
* 
* @param {string} table the table in which to insert
* @param {Object} obj the set of keys/values for the row
* @returns {string} the SQL insert query
*/

function insertSQL(table, obj) {
  //create new insert string;
  //create variable for keys
  //create variable for values
  let listOfKeys = "";
  let listOfValues = "";
  //for each key in object
  for (let key in obj) {
    //concatenate keys
    //concatenate values
    listOfKeys += key + ", ";
    listOfValues += obj[key] + ", "
  }
  //concatenate whole insert string
  return "insert into " + table + "(" + listOfKeys.slice(0, -2) + ")" + "values (" + listOfValues.slice(0, -2) + ")";
}

console.log(
  insertSQL(
    'users',
    {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 30
    }
  )
);
// should log 'insert into users(firstName, lastName, age) values("Bob", "Smith", 30)'