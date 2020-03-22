const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Should add two numbers', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
  // if(result !== 7) {
  //   throw new Error(`You added 4 and. The result wass ${result}. Expected 7`)
  // }
})

test('Should generate greeting from name', () => {
  const actual = generateGreeting('Cancan')
  expect(actual).toBe('Hello Cancan!')
})

test('Should generate greeting for no name', () => {
  const actual = generateGreeting()
  expect(actual).toBe('Hello Anonymous!')
})