import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'

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

test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })

  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('Should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set calendarFocused on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)

  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})