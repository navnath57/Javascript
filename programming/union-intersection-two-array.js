const union = (arr1, arr2) => {
  // return [...new Set(arr1.concat(arr2))];
  return [...new Set([...arr1, ...arr2])].sort();
};

// console.log(union([1, 7, 2, 3, 4], [5, 6, 1, 6]));

//intersection

const intersection = (arr1, arr2) => {
  return [...new Set(arr1)].filter((item) => arr2.includes(item));
};
console.log(intersection([1, 7, 2, 3, 4], [5, 6, 1, 6]));
