// Promise handles asynchronous task in javascript by providing a more readable and structured approach than callbacks for handling outputs.
//Main Def=>Promise: It is an object representing the eventual completion or failure  of an asynchronous  operation

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
