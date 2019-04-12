const multiply = multiplier => num => multiplier * num
const add = toAdd => num => toAdd + num

const add1 = add(1)
const mult3 = multiply(3)

const result = add1(mult3(2))

console.log(result)
