import moment from 'moment'

import filtersReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }

  const action = { type: 'SORT_BY_DATE' }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'test string' })
  expect(state.text).toBe('test string')
})
