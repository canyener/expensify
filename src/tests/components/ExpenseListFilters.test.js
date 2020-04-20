import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { defaultFilters, altfilters } from '../fixtures/filters'

let setTextFilterSpy, 
    sortByDateSpy, 
    sortByAmountSpy, 
    setStartDateSpy, 
    setEndDateSpy,
    wrapper

beforeEach(() => {
  setTextFilterSpy = jest.fn(),
  sortByDateSpy = jest.fn(),
  sortByAmountSpy = jest.fn(),
  setStartDateSpy = jest.fn(),
  setEndDateSpy = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilterSpy}
      sortByDate={sortByDateSpy}
      sortByAmount={sortByAmountSpy}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy} 
    />)
})

describe('ExpenseListFilters', () => {
  describe('#Snapshots', () => {
    test('Should render ExpenseListFilters correctly with default filters', () => {
      expect(wrapper).toMatchSnapshot()
    })
    
    test('Should render ExpenseListFilters correctly with alternative filters', () => {
      wrapper.setProps({ filters: altfilters })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('#Functionality', () => {
    test('Should handle text change', () => {
      const value = 'rent'
    
      wrapper.find('input').at(0).simulate('change', { target: { value } })
    
      expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
    })
    
    test('Should sort by date', () => {
      const value = 'date'
    
      wrapper.setProps({ filters: altfilters })
      wrapper.find('select').simulate('change', { target: { value }})
    
      expect(sortByDateSpy).toHaveBeenCalled()
    })
    
    test('Should sort by amount', () => {
      const value = 'amount'
      
      wrapper.find('select').simulate('change', { target: { value } })
    
      expect(sortByAmountSpy).toHaveBeenCalled()
    })
    
    test('Should handle date changes', () => {
      const startDate = moment(0).add(4, 'years')
      const endDate = moment(0).add(8, 'years')
    
      wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate })
      
      expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
      expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
    })
    
    test('Should handle date focus changes', () => {
      const calendarFocused = 'endDate'
    
      wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    
      expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
    })
  })
})



