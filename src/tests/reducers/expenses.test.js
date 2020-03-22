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