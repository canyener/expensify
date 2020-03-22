import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type : '@@INIT' })
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id // 2
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should NOT remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-99'
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
  const expense = {
    id: '4',
    description: 'test expense 4',
    note: '',
    amount: 195,
    createdAt: 0
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('Should edit expense', () => {
  const updates = {
    description: 'updated expense description',
    note: 'updated expense note',
    amount: 111,
    createdAt: 1000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id, //2
    updates
  }
  
  const state = expensesReducer(expenses, action)
  expect(state[1]).toEqual({...updates, id: '2' })
})

test('Should NOT edit expense if id not found', () => {
  const updates = {
    description: 'updated expense description'
  }
  
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-99',
    updates
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})