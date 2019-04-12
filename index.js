const fruits = ["apple", "orange"]
const veggies = ["celery", "carrots"]

const createPerson = name => ({
  name
})

// const createPerson = name => ({
//   name
// })

console.log(createPerson("John"))

const food = [
  ...fruits.map(name => ({
    name,
    type: "fruit"
  })),

  ...veggies.map(name => ({
    name,
    type: "veggie"
  }))
]

console.log(food)
