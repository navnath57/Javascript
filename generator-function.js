

// Generator functions allow you to pause and resume function execution, making them useful for tasks like iterating over large datasets or 
// managing asynchronous flows.

// Key Points:

// Declared with an asterisk (function*).

// Uses the yield keyword to pause execution.

// Returns an iterator object with next() method.

function* infiniteSequesnce(){
    let num =1;
    while(true){
        yield num;
        num++;
    }
}

const seq = infiniteSequesnce()
// console.log(seq.next().value)
// console.log(seq.next().value)
for (let index = 0; index < 10; index++) {
    console.log(seq.next().value)
}
