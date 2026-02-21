// | Method  | Returns New Array? | Modifies Original? |
// | ------- | ------------------ | ------------------ |
// | map     | ✅ Yes              | ❌ No               |
// | filter  | ✅ Yes              | ❌ No               |
// | reduce  | ❌ Single value     | ❌ No               |
// | forEach | ❌ Undefined        | ❌ No               |
// | sort    | ❌ No               | ✅ Yes              |
// | splice  | ❌ No               | ✅ Yes              |
// | slice   | ✅ Yes              | ❌ No               |



//  .map() 
//  Creates a new array by applying a function to each element
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(element => element * 2);
console.log(arr);
console.log(newArr);

// .filter()
// creates a new array with elements that pass a contition
// Realtime use : Filtering api data or form input
//                Showing only active items in dashboard
console.log("===============filter()=====================");

const user = [
    {
        name: "bikram",
        age: 20
    },
    {
        name: "binod",
        age: 15
    },
    {
        name: "binod",
        age: 12
    },
    {
        name: "binod",
        age: 18
    }

];

const below18 = user.filter(user => user.age < 18);
console.log(below18);

// .reduce()
//Definition : Reduces an array to a single value by applying a function to each element
// Realtime use : Calculating total price of all items in cart
// Counting occurrences in datasets
console.log("==================reduce()==================");
const price = [1, 2, 3, 4, 5];
const sum = price.reduce((acc, current) => acc + current, 0);
console.log(sum);


// foreach(): used to run function on each element of and array
// it does not return a new array
// mainly used for side effects (like printing , updating values etc);
console.log("==================forEach()==================");
const forEachArray = [1, 2, 3, 4, 5];
forEachArray.forEach(element => console.log(element * 2));

//map():Used to transform each element in an array.
//  It returns a new array.
//  Original array stays unchanged.
console.log("==================map()==================");

const mapArray = [1, 2, 3, 4, 5];
const mappedArray = mapArray.map(element => element * 2);
console.log(mappedArray);



//find() : Returns the first element that satisfies a condition.
console.log("==================find()==================");
const age = [59, 34, 30, 50, 30, 90];
const findAge = age.find(element => element === 50);
console.log(findAge);

//some() : Return true if condition is met
// Real-time use:
// Validate if a list has certain items
// Enable/disable buttons based on conditions
console.log("==================some()==================");
const someAge = age.some(element => element > 30);
console.log(someAge);

// ecery(): Returns true if all elements satisfy a condition.
// Purpose: Check if all elements match a rule.
// Real-time use:
// Form validation
// Permissions / role checks
console.log("==================every()==================");
const everyAge = age.every(element => element > 40);
console.log(everyAge);

// includes(): Check the vlaue in array
// search functionality
// validation against allowed values

console.log("==================includes()==================");
const includesAge = age.includes(30);
console.log(includesAge);

// findIndex(): Return the index of the first element that satisfies the condition.
console.log("==================findIndex()==================");
const findIndexAge = age.findIndex(element => element === 50);
console.log(findIndexAge);

// sort(): Sorts the elements of an array in place and returns the sorted array.
// Purpose: Organize data numerically or alphabetically.
// Quick Mini-Review (Lock it in memory)
// .sort() without function → sorts as strings
// (a, b) => a - b → ascending (small → big)
// (a, b) => b - a → descending (big → small)
// Real-time use:
// Sorting products by price
// Sorting users alphabetically
console.log("==================sort()==================");
const sortAge = age.sort((a, b) => a - b);
console.log(sortAge);

const users = [
    { name: "Ram", age: 25 },
    { name: "Hari", age: 18 },
    { name: "Sita", age: 30 }
];

const shortUser = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(shortUser);


// .slice()
// 1️⃣ slice() → Does NOT change original array
// It cuts out a portion and returns a new array.
// Basic syntax:
// arr.slice(start, end)
// start → index where to begin
// end → index where to stop (NOT included)

// .splice()
// 2️⃣ splice() → Changes original array
// This one is powerful ⚡
// It can:
// Remove elements
// Add elements
// Replace elements
// Syntax:
// arr.splice(start, deleteCount, newItem1, newItem2...)

console.log("==================slice()==================");
const roomNum = [20, 40, 50, 70, 80, 100]

const sliceRoomNum = roomNum.slice(1, 3); // 40 ,50
console.log(sliceRoomNum);

const spliceRoomNum = roomNum.splice(1, 3);
console.log(roomNum); // 20 80 100
