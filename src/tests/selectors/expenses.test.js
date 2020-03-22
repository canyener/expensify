import moment from 'moment'

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
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: 'test note',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
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

test('Should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }

  const actualResult = selectExpenses(expenses, filters)
  expect(actualResult).toEqual([expenses[2], expenses[0]])
})

test('Should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }

  const actualResult = selectExpenses(expenses, filters)
  expect(actualResult).toEqual([expenses[0], expenses[1]])
})

test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const actualResult = selectExpenses(expenses, filters)
  expect(actualResult).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const actualResult = selectExpenses(expenses, filters)
  expect(actualResult).toEqual([expenses[1], expenses[2], expenses[0]])
})