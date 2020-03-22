import moment from 'moment'

import { 
  setStartDate, 
  setEndDate, 
  sortByAmount, 
  sortByDate, 
  setTextFilter 
} from '../../actions/filters'

test('Should generate set start date action object', () => {
  const actualAction = setStartDate(moment(0))
  expect(actualAction).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should generate set end date action object', () => {
  const actualAction = setEndDate(moment(0))
  expect(actualAction).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('Should generate sort by amount action object', () => {
   const actualAction = sortByAmount()
   expect(actualAction).toEqual({ type: 'SORT_BY_AMOUNT' })
}) 

test('Should generate sort by date action object', () => {
  const actualAction = sortByDate()
  expect(actualAction).toEqual({ type: 'SORT_BY_DATE' })
})

test('Should generate set text filter action object with provided text value', () => {
  const actualAction = setTextFilter('test string')
  expect(actualAction).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test string'
  })
})

test('Should generate set text filter action object with default text value', () => {
  const actualAction = setTextFilter()
  expect(actualAction).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})