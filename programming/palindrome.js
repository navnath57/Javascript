const isPlindrome = (str) => {
  var reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
};

console.log(isPlindrome("loop"));
console.log(isPlindrome("lool"));
