

const timerId =  setTimeout(() => {
    console.log("Hello after 2 seconds!")
}, 2000);

clearTimeout(timerId);
// clearInterval(timerId);

const intervalId = setInterval(()=>{
    console.log("Hello every 2 seconds!")
},2000)

setTimeout(()=>{
clearInterval(intervalId)
},4000);