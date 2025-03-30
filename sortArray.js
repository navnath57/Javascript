let arr = [10, 4, 2, 34, 12];
console.log(arr.sort()); // Incorrect

console.log(arr.sort((a, b) => a - b)); //Correct

//sort array of object by age
let users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Peter", age: 35 },
];

let ageSort = users.sort((a, b) => b.age - a.age);
console.log(ageSort);
