const add = (a, b) => a + b

test('Should add two numbers', () => {
  const result = add(3, 4)

  expect(result).toBe(7)
  // if(result !== 7) {
  //   throw new Error(`You added 4 and. The result wass ${result}. Expected 7`)
  // }
})