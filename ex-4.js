function findOdd(nums) {
  // Start coding here
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if(nums[index]%2==1) count++
  }
  return count;
}

let result1 = findOdd([0]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
