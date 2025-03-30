let a = [2, 3, 4, 5, 6, 8, 7];
let b = [2, 3, 4];

let res = a.map((val, index) => (b[index] ? b[index] + val : val));
console.log(res?.sort((a, b) => a - b));
