const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites); // [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
console.log(...favorites); // Seafood Salad Nugget Soup

// combine arrays
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites, others];
console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const allFavorites2 = [...favorites, ...others];
console.log(allFavorites2);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

// Object
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
