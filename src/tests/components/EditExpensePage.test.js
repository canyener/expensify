import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper

beforeEach(() => {
  editExpenseSpy = jest.fn(),
  startRemoveExpenseSpy = jest.fn(),
  historySpy = { push: jest.fn() },
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpenseSpy} 
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
      expense={expenses[2]}
    />
  ) 
})

test('Should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense', () =>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('Should redirect to / on editExpense action', () => {
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