const starPyramid = () => {
  let rows = 10;

  for (let i = 1; i <= rows; i++) {
    let stars = " ";
    for (let j = 0; j < rows - i; j++) {
      stars += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }
    console.log(stars);
  }
};

starPyramid();
