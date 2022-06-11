function addS(str) {
  return str + 's';
}
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'
