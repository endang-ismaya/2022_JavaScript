// Define an Object
const user = {
    firstName: "Endang",
    lastName: "Ismaya",
    age: 38,
    isMarried: true,
};

// Get Object Values
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Hello, My name is ${user["firstName"]}`);

// Update an Object
user.age = 37;
user.lastName = "Wijaya";
user["address"] = "Tangerang";

console.log(user);
