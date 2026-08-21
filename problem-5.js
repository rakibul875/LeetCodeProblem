const evenSum = (num) => {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      total += num[i];
    }
  }
  return total;
};
const result = evenSum([10, 5, 10]);
console.log(result);
