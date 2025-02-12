const union = (arr1, arr2) => {
  return [...new Set(arr1.concat(arr2))];
};

console.log(union([1, 7, 2, 3, 4], [5, 6, 1, 6]));
