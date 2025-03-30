const numbers = [1, 2, 3, 4];
const a = numbers.forEach((num, index, arr) => {
  arr[index] = num * num; // Modifies the original array
});

console.log(a);
// console.log(numbers); // Output: [1, 4, 9, 16]
