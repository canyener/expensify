import React from 'react'
import { shallow } from 'enzyme'

import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../components/ExpenseListItem'

test('Should render ExpenseListItem with given expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
