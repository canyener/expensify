import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

test('Should render AddExpensePage correctly', () => {
  const onSubmitSpy = jest.fn()
  const historySpy = { push: jest.fn() }

  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />)

  expect(wrapper).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
  const onSubmitSpy = jest.fn()
  const historySpy = { push: jest.fn() }

  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />)

  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])

  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1])
})