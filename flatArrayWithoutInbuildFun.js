const flattenArray = (arr) => {
  let res = [];

  function flatten(subArray) {
    for (let i = 0; i < subArray.length; i++) {
      if (Array.isArray(subArray[i])) {
        flatten(subArray[i]);
      } else {
        res.push(subArray[i]);
      }
    }
  }

  flatten(arr);

  return res;
};

let arr = [2, 3, [4, 5, [8, 9]], 6];
console.log(flattenArray(arr));
