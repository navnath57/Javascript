var x = 57;

const reverseNumber = () => {
  return Number(x.toString().split("").reverse().join(""));
};

console.log(reverseNumber(x));

// other way
const reverseNumberVal = (number) => {
  var reverseNum = 0;
  while (number > 0) {
    var rem = number % 10; //4=>3=>2=>1
    reverseNum = reverseNum * 10 + rem; //4=>43=>432=>4321
    number = Math.floor(number / 10); //123=>12=>1=>0
  }
  return reverseNum;
};

console.log("1234: ", reverseNumberVal(1234));
