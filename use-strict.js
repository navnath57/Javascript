

"use strict";


//undeclared variable i.e not written as "let x=7"
    // x = 7;
    // console.log(x);

// Read-only Properties
    // const obj = {};
    // Object.defineProperty(obj, "prop", { value: 37, writable: false });

    // obj.prop = 100;
    // console.log("valuue changed");
    
// Duplicated param in function

function sum(a,a,c){
   return a+a+c;
}
console.log(sum(10,20,30));
