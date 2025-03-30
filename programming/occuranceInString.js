const occurences = (str) => {
  let occ = {};
  str.split("").map((s) => {
    if (s != " ") {
      if (occ.hasOwnProperty(s) === false) {
        occ[s] = 1;
      } else {
        occ[s]++;
      }
    }
  });

  return occ;
};

// console.log(occurences("navnath auti"));

const arraFuncion = () => {
  let array = ["a", "b", "c", "b", "a"];

  let occurrences = {};

  for (let char of array) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }

  console.log(occurrences);
};

let array1 = ["a", "b", "c", "b", "a"];
console.log("join alphabets=>", array1.join(""));

// arraFuncion();

const occuFunc = (str) => {
  let occ = {};

  str.split("").map((char) => {
    if (char != " ") {
      if (occ.hasOwnProperty(char) === false) {
        occ[char] = 1;
      } else {
        occ[char]++;
      }
    }
  });

  return occ;
};

console.log(occuFunc("auti navnath"));
