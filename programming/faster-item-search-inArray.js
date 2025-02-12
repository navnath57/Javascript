const array = Array.from({ length: 1000000 }, (_, i) => ({
  id: i,
  name: `User${i}`,
}));

console.time("find");
const found = array.find((a) => {
  a.id === 999999;
});
console.timeEnd("find");

console.time("map lookup");
let mapArr = new Map(array.map((obj) => [obj.id, obj]));
const foundMap = mapArr.get(999999);
console.timeEnd("map lookup");
