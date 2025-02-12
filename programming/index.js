const closureFun = () => {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
};

// function closureFun() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

closureFun();
