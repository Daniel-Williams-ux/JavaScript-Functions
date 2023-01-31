function higherOrder() {
  return function() {
    console.log("I'm a returned function!");
  }
}

var returnedFunction = higherOrder();
//returnedFunction(); // I'm a returned function!
//0r
//console.log(returnedFunction()); // I'm a returned function!
//or
//higherOrder()()
