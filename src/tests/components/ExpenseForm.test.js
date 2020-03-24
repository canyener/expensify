import React from 'react'
import { shallow } from 'enzyme'

import ExpenseForm  from '../../components/ExpenseForm'

test('Should render ExpenseForm correctly', () => {
  const wrapper= shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})
