const obj = [
  { apple: 2, orange: 1, banana: 3, grapes: 1 },
  { apple: 2, orange: 1, banana: 3 },
  { apple: 2, orange: 1, banana: 3, grapes: 2 },
];

const res = obj.reduce((acc, item) => {
  for (const key in item) {
    acc[key] = (acc[key] || 0) + item[key];
  }

  return acc;
}, {});

console.log(res);
