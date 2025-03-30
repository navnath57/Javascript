const alphabetOrder = (str) => {
  // console.log(str.split("").sort().join(""));
  return str.sort((a, b) => b - a);
  // return str.split("").sort().join("");
};
// alphabetOrder("navnath");
console.log(alphabetOrder([3, 2, 4, 1, 5]));
// console.log(alphabetOrder("navnath"));
// console.log(alphabetOrder("navnath"));

// str.split("");
