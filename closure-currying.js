//Closuers is a function that remembers the environment in which it was created even after the outer function has finished executing.
// Closure: Function with its lexical scope forms a closure is called closure
// Closure: It is the combination of a function bundled together with its sorrounding state( the lexical environement)
// Main Defination:Closure: Its function along with its lexical scope bundele together to forms  a closure is call Closure.
//*Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.

//Currying is a concept in functional programming where function that takes multiple arguments and get transformed into a sequence of functions,
// each accepting a single argument
//OR
//Currying is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

function outerFunction(name) {
  let outertVar = "This is from outside!";

  function innerFucntion(surname) {
    console.log(`${name} ${surname}`);
  }
  return innerFucntion;
}

const closureFunction = outerFunction("Mahesh"); // remain constant and bellowed calling function argument get changed i.e. concept of Currying
// closureFunction("Auti");
// closureFunction("Hirade");
closureFunction("Kale");
// outerFunction()("Auti");
