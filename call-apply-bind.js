// call:  Runs the function immediately, passing arguments seperatly
// apply: Runs the function immediately, passing arguments as an array
// bind:  Create a new function with preset this and arguments, which you can call later

function cook(arg1,arg2,arg3){
    console.log(`${this.name} is having a meal order with ${arg1}, ${arg2} and ${arg3}`);
}

const navnath  = {name:"Navnath"}

// cook.call(navnath,`Chicken`,`Rice`,`Sweetdish`)
// cook.apply(navnath,[`Chicken`,`Rice`,`Sweetdish`])

const cookForNavnath = cook.bind(navnath,`Chicken`,`Rice`,`Sweetdish`);
cookForNavnath();