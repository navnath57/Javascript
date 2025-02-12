const closureFun = () => {
  for (var i; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

function closureFun1() {
  for (var i; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

closureFun1();
