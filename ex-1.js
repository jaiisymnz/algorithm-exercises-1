function addStrings(num1, num2) {
  let result = `${Number(num1) + Number(num2)}`;
  return result;
  //Start coding here
}

let result1 = addStrings("11", "123");
console.log(result1); // "134"

let result2 = addStrings("456", "77");
console.log(result2); // "533"

let result3 = addStrings("0", "0");
console.log(result3); // "0"


console.log(typeof(result1));
console.log(typeof(result2));
console.log(typeof(result3));