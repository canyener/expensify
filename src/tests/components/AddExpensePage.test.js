import React from 'react'
import { shallow } from 'enzyme'

import { AddExpensePage } from '../../components/AddExpensePage'

test('Should render AddExpensePage correctly', () => {
  const onSubmitSpy = jest.fn()
  const historySpy = { push: jest.fn() }

  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />)

  expect(wrapper).toMatchSnapshot()
})