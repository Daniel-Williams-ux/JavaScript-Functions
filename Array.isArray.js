function myArr(input) {
  const checked = Array.isArray(input);
  return checked;
}
const nums = myArr({});
console.log(nums);//false

function myArr(input) {
  const checked = Array.isArray(input);
  return checked;
}
const nums = myArr([1, 2, 3, 4]);
console.log(nums);//true
