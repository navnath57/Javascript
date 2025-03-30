const obj = [
  { srno: 1, score: 30 },
  { srno: 2, score: 40 },
  { srno: 1, score: 40 },
];

const res = Object.values(
  /// Look at this   Object.values()
  obj.reduce((acc, { srno, score }) => {
    if (!acc[srno]) {
      acc[srno] = { srno, score };
    } else {
      acc[srno].score += score;
    }

    return acc;
  }, {})
);

console.log(res);
