const person = {
  name: 'Can',
  age: 35,
  location: {
    city: 'Istanbul',
    temp: 8
  }
}

const { name: firstName = 'Anonymous', age } = person

console.log(`${firstName} is ${age}`)

const { city, temp: temperature } = person.location

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`)
}
