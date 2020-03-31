import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

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

test('Should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

// test('Should setup add expense action object with default values', () => {
//   const actualAction = addExpense()

//   expect(actualAction).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {     
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   })
// })