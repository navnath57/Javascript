let mainArray = [1, 2, 3, 4, 5];

const clonedArra = (array) => {
  return [...array];
};
let newArr = clonedArra(mainArray);
console.log(newArr);
newArr.push(6);
console.log(newArr);
console.log(mainArray);
