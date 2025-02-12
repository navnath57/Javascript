var str = "sare jaha se accha hindustaan humara";

var savedStr1 = str.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(savedStr1.join(" "));
