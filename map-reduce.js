const numbers = [1,2,3,4,5];

const double = numbers.map(num=>num*2);

console.log(numbers);
console.log(double);

const reduceResult = numbers.reduce((acc,num)=>{
    return acc = acc+num
},10);
console.log(reduceResult);
