function runningSum(arr) {
  //Start coding here
<<<<<<< HEAD
  let acc = 0;
  for (a of arr) {
    acc += a;
  }
  return acc;
=======
>>>>>>> c33f16c144d7e1985708efa23a3dd0b8f9b05f0c
}

let result1 = runningSum([1, 2, 3, 4]);
let result2 = runningSum([3, 1, 2, 10, 1]);

console.log(result1); // [1, 3, 6, 10]
// ผลลัพธ์ข้างต้นเกิดจาก [1, 1+2, 1+2+3, 1+2+3+4]

console.log(result2); // [3, 4, 6, 16, 17]
// ผลลัพธ์ข้างต้นเกิดจาก [3, 3+1, 3+1+2, 3+1+2+10, 3+1+2+10+1]
