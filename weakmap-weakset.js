

// Both WeakMap and WeakSet are non-iterable, have no size property, and ideal for temporary data storage like cache and memory-efficient management of object

//WeakMap
let weakMap = new WeakMap();

let objmap = {name:"Navnath"};

weakMap.set(objmap,"Employee");
// objmap=null;

console.log(weakMap.get(objmap));

//WeakSet
let weakSet = new WeakSet();

let objData = {name:"Navnath"};

weakSet.add(objData,"Employee");
// objData=null;

console.log(weakSet.has(objData));
