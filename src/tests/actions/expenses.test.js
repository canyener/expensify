import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'

import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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

test('Should add expense to database and store', (done) => {
  const store = createMockStore({})

  const expenseData = {
    description: 'Test desc',
    amount: 3000,
    note: 'Test note',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
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