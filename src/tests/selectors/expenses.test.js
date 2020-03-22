import selectExpenses from '../../selectors/expenses'

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: -1000
}, {
  id: '3',
  description: 'Credit Card',
  note: 'test note',
  amount: 4500,
  createdAt: 1000
}]

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const actualResult = selectExpenses(expenses, filters)
  expect(actualResult).toEqual([expenses[2], expenses[1]])
})