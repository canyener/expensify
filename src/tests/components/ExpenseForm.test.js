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

test('Should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })

  expect(wrapper.state('description')).toBe(value)
})

test('Should set note on textarea change', () => {
  const expectedValue = 'New note'
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('textarea').at(0).simulate('change', {
    target: { value: expectedValue }
  })

  expect(wrapper.state('note')).toBe(expectedValue)
})

test('Should set amount if input value is valid', () => {
  const expectedValue = '23.55'
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('input').at(1).simulate('change', {
    target: { value: expectedValue }
  })

  expect(wrapper.state('amount')).toBe(expectedValue)
})

test('Should NOT set amount if input value is invalid', () => {
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('input').at(1).simulate('change', {
    target: { value: '123.456' }
  })

  expect(wrapper.state('amount')).toBe('')
})