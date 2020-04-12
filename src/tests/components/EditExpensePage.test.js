import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

beforeEach(() => {
  startEditExpenseSpy = jest.fn(),
  startRemoveExpenseSpy = jest.fn(),
  historySpy = { push: jest.fn() },
  wrapper = shallow(
    <EditExpensePage 
      startEditExpense={startEditExpenseSpy} 
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
      expense={expenses[2]}
    />
  ) 
})

test('Should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle startEditExpense', () =>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should redirect to / on startEditExpense action', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})

test('Should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click')
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
    id: expenses[2].id
  })
})

test('Should redirect to / on startRemoveExpense action', () => {
  wrapper.find('button').simulate('click')
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
})