const occurences = (str) => {
  let occ = {};
  str.split("").map((s) => {
    if (occ.hasOwnProperty(s) === false) {
      occ[s] = 1;
    } else {
      occ[s]++;
    }
  });

  return occ;
};

console.log(occurences("navnath"));
