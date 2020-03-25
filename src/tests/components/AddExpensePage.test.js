import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpenseSpy, historySpy, wrapper

beforeEach(() => {
  addExpenseSpy = jest.fn(),
  historySpy = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy} />)
})

test('Should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should submit correct expense on onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1])
})

test('Should redirect to / after submitting data', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
}) 