const repeatFun = (str) => {
  let occSubString = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let subStr = str.substring(i, j + 1);
      occSubString[subStr] = (occSubString[subStr] || 0) + 1;
    }
  }

  console.log(occSubString);
};

repeatFun("food");
