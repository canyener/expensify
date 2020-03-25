import React from 'react'
import { shallow } from 'enzyme'

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

test('Should render ExpenseListFilters correctly with default filters', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters correctly with alternative filters', () => {
  wrapper.setProps({ filters: altfilters })
  expect(wrapper).toMatchSnapshot()
})