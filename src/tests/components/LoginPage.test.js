import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from '../../components/LoginPage'

test('Should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})