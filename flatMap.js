let numbers = [1, 2, 3];

let result = numbers.flatMap((num) => [num, num * 2]);

// Iteration 1 (num = 1)
// [1, 2]  // num = 1 → [1, 1*2]
// Iteration 2 (num = 2)
// [2, 4]  // num = 2 → [2, 2*2]
// Iteration 3 (num = 3)
// [3, 6]  // num = 3 → [3, 3*2]
// [[1, 2], [2, 4], [3, 6]]  // This is a nested array
// Step 3: flatMap() Flattens One Level
// Since flatMap() automatically applies flat(1), it removes one level of nesting:
// [1, 2, 2, 4, 3, 6]  // Flattened version of [[1, 2], [2, 4], [3, 6]]

console.log(result);
