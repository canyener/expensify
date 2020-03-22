import moment from 'moment'
import { setStartDate, setEndDate } from '../../actions/filters'

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