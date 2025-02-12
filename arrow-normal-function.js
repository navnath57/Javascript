//Arrow Function
//Inherits this from surrounding scope i.e. Does not bind its own this.

// Normal Function
// Has its own this i.e. bind its own this

const person = {
  name: "Navnath",
  arrowFunction: () => {
    console.log("Arrow: ", this.name); //output: undefined
  },
  normalFunction: function () {
    console.log("Norma: ", this.name); //output: Navnath
  },
};

person.arrowFunction(); //arrowFunction inherits "this" from the surrounding scope (global scope, where this.name is undefined).
person.normalFunction(); // normalFunction binds "this" to person, so it correctly logs "John".
