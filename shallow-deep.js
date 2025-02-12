// Shallow Copy: In the shallow copy an object, the main properties are copied, but any nested objects or arrays are still linked to the original object
// Deep Copy: Every part of object, including all nested objects or arrays, is fully copied, ensuring the modifications to the copy doesn't affect the original

const original = {name:"Navnath", address:{city:"Pune"}}

// const shallow = Object.assign({},original)   //1st way using assign
// const shallow2 = {...original}    //2nd way using spread operator
// shallow2.address.city = "Mumbai";
// console.log(original.address.city);



//deep copy

const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Mumbai";
console.log(deep.address.city);
console.log(original.address.city);