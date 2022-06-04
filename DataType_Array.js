// Define an Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming' ]

// get element
console.log(myArray[0]); // Cokelat
console.log(myArray[10]); // undefined
console.log(myArray.length); // 5

// add element
myArray.push("JavaScript");
console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]

// take out last element
myArray.pop();
console.log(myArray); // [ 'Cokelat', 42.5, 22, true, 'Programming' ]

// take out first element
myArray.shift();
console.log(myArray); // [ 42.5, 22, true, 'Programming' ]

// insert first element
myArray.unshift("Macbook");
console.log(myArray); // [ 'Macbook', 42.5, 22, true, 'Programming' ]

// delete an element
delete myArray[2];
console.log(myArray); // [ 'Macbook', 42.5, <1 empty item>, true, 'Programming' ]

myArray.splice(2, 1);
console.log(myArray); // [ 'Macbook', 42.5, true, 'Programming' ]
