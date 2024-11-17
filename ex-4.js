function findOdd(nums) {
  // Start coding here
  const count = {};

  for (num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (num in count) {
    if (count[num] % 2 === 1) {
      return Number(num);
    } 
  }
}

let result1 = findOdd([0]);
console.log(result1); // 0

let result2 = findOdd([1, 1, 2]);
console.log(result2); // 2

let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);
console.log(result3); // 4

console.log(typeof result1);
