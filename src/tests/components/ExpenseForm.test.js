import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm  from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('Should render ExpenseForm correctly with NO expense data', () => {
  const wrapper= shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm correctly with given expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render error message for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  //expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper.state('error')).toBe('Please provide description and amount.')
  expect(wrapper).toMatchSnapshot()
})