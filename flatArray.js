let arr = [1, 2, [3, 4], [5, 6]];

console.log(arr.flat()); //Flattening One Level (Default depth = 1)

let arr1 = [1, 2, [3, 4, [7, 8]], [5, 6]];

console.log(arr1.flat(2)); //level two flat if inner nseted array

let arr2 = [1, 2, [3, 4, [7, 8, [9, 10, [11, 12]]]], [5, 6]];

console.log(arr2.flat(Infinity)); //use Infinity if multiple inner nested array

let data = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(data.flat());

let sparseArr = [1, , 2, [3, , 4]];

console.log(sparseArr.flat());
