const person = {
  name: "John",
  age: 37
}

const fruit = ["apple", "orange", "banana"]
const veggies = ["celery", "carrots"]

const food = [...(fruit.length > 2 ? fruit : []), "chips", ...veggies]

console.log(food)
