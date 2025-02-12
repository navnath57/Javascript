let arr = [10, 4, 2, 34, 12];
console.log(arr.sort()); // Incorrect

console.log(arr.sort((a, b) => a - b)); //Correct
