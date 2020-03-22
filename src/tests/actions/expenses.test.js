import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const actualAction = removeExpense({ id: '123abc' })
  expect(actualAction).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})