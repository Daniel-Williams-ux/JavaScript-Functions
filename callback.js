function cbFunction(x, y, z) {
  return x + y + z
}

function caller(x, y, z, cbFunction) {
  console.log('In caller function!')
  return cbFunction(x, y, z)
}

let x = caller(1, 2, 3, cbFunction)
let y = caller(2, 2, 3, cbFunction)
let z = caller(2, 3, 3, cbFunction)
console.log(x, y, z)
