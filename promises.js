// Promise handles asynchronous task in javascript by providing a more readable and structured approach than callbacks for handling outputs.
//Main Def=>Promise: It is an object representing the eventual completion or failure  of an asynchronous  operation

//Promise.all([p1,p2,p3]), Promise.allSettled([p1,p2,p3]), Promise.race([p1,p2,p3]),Promise.any([p1,p2,p3])
// Which One to Use?
// ✅ Use Promise.all → When all results are needed together.
// ✅ Use Promise.allSettled → When you need all results, even failed ones.
// ✅ Use Promise.race → When you want the first result (fastest).
// ✅ Use Promise.any → When you only care about the first success.
// const data ={name:"Navnath", age:30}
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved here!");
  }, 5000);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    resolve(data);
  })
    .then(
      // data=>{
      console.log("Data=>", data)
      // }
    )
    .catch((err) => {
      console.log("Error=> ", err);
    });
}

fetchData();
