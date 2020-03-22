import expensesReducer from '../../reducers/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type : '@@INIT' })
  expect(state).toEqual([])
})