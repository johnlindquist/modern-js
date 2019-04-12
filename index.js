const fruit = ["apple", "orange", "banana"]

const shop = ([first, ...rest]) => {
  return [first, true]
}

const [firstShoppingItem, bought] = shop(fruit)

console.log(firstShoppingItem, bought)
