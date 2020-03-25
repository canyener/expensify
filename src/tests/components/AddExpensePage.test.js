import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let onSubmitSpy, historySpy, wrapper

beforeEach(() => {
  onSubmitSpy = jest.fn(),
  historySpy = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />)
})

test('Should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should submit correct expense on onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1])
})

test('Should redirect to / after submitting data', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
}) 