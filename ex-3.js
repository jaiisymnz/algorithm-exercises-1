function singleNumber(nums) {
  // Start coding here
  const count = {};

  for (num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (num in count) {
    if (count[num] === 1) {
      return Number(num);
    }
  }
}

let result1 = singleNumber([2, 2, 1]);
console.log(result1); // 1

let result2 = singleNumber([4, 1, 2, 1, 2]);
console.log(result2); // 4

let result3 = singleNumber([10]);
console.log(result3); // 10
console.log(typeof result3); // "number"

