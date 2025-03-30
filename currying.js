const curriedAdd = (param1) => {
  return function (param2) {
    return function (param3) {
      console.log(param1 + param2 + param3);
    };
  };
};
// curriedAdd(1)(2)(3);

const curriedAddArrowFun = (param1) => (param2) => (param3) => {
  console.log(param1 + param2 + param3);
};
curriedAddArrowFun(1)(2)(3);
