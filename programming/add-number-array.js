const sum = (arr) => {
  return arr.reduce((acc, num) => {
    acc = acc + num;
    return acc;
  }, 10);
};

console.log(sum([1, 2, 3, 4, 5]));
