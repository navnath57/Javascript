//Functions that take other functions as arguments or return functions as results
//which will used to reuse code, more readable, perfomancewise and memory wise better

//Higher Order Componennt In react:
//HOC is fucntion which takes another component and enhance up and return back that component

//Promise.all([p1,p2,p3]), Promise.allSettled([p1,p2,p3]), Promise.race([p1,p2,p3]),Promise.any([p1,p2,p3])
// Which One to Use?
// ✅ Use Promise.all → When all results are needed together.
// ✅ Use Promise.allSettled → When you need all results, even failed ones.
// ✅ Use Promise.race → When you want the first result (fastest).
// ✅ Use Promise.any → When you only care about the first success.
//  check Akshay Saini vdo
Promise.resolve("");
Promise.reject();

const radiusArr = [2, 3, 4, 5];

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const caluclate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(caluclate(radiusArr, area));
console.log(caluclate(radiusArr, circumference));
console.log(caluclate(radiusArr, diameter));
