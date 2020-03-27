import selectExpensesTotal  from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('Should return 0 if no expenses', () => {
  const actualResult = selectExpensesTotal([])
  expect(actualResult).toBe(0)
})

test('Should correctly add up a single expense', () => {
  const actualResult = selectExpensesTotal([expenses[0]])
  expect(actualResult).toBe(195)
})

test('Should correctly add up a multiple expenses', () => {
  const actualResult = selectExpensesTotal(expenses)
  expect(actualResult).toBe(114195)
})