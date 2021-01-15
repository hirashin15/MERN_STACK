// 1. Given
// console.log(hello);                                   
// var hello = 'world';          
// After Hoisting
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';                       
// prediction correct

// 2. Given
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// After Hoisting
// var needle = 'haystack'
// test() is hoisted, needle declared within test() and hoisted to top of scope. 
// test() called and needle is logged to console.

// 3. Given
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// After hoisting
// var brendan = 'super cool';
// print() hoisted, brendan declared as 'only okay';
// Log to console 'super cool' since print() was never called.

// 4. Given
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// After Hoisting
// var food = 'chicken';
// eat() is hoisted, food is declared within function.
// Log to console 'chicken'
// Call eat(), log to console 'half-chicken'

// 5. Given
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// After hoisting
// mean() is called and undefined

// 6. Given
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// After hoisting
// Log to console genre, undefined
// genre() hoisted, genre declared
// var genre = "disco"
// call rewind, log "rock", then "r&b"
// log to console "disco"

// 7. Given
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// After hoisting
// Dojo = "san jose", not declared
// Log to console dojo, undefined
// hoist learn()
// call learn, give value to dojo 
// log to console "seattle"
// Log to console "burbank"
// Log to console dojo, undefined

// 8. Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// After hoisting
// Log to console, {{name: "Chicago", students: 65, hiring: true}}
// Log to console, Error at dojo = "close for now";
