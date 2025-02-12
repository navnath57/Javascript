
(async function (){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/7');
        const data = await response.json()
        console.log("Data fetched: ", data)
    } catch (error) {
        console.log("Error: ",error);
    }
})()

// getData();