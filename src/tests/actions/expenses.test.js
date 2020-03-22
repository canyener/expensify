import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should setup remove expense action object', () => {
  const actualAction = removeExpense({ id: '123abc' })
  expect(actualAction).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('Should setup edit expense action object', () => {
  const actualAction = editExpense('123abc', { description: 'test description', note: 'test note' })
  expect(actualAction).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'test description',
      note: 'test note'
    }
  })
})