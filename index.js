const greeting = "hi"
const name = "John"

const div = (strings, greeting, name) => {
  const trimmedString = strings.map(string => string.trim()).join("")

  return `<div>${greeting} 
  
  
  ${trimmedString}

  ${name}
  </div>`
}

const message = div`
${greeting}
${name}

How are you today?
`

console.log(message)