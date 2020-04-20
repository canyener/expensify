import React from 'react'
import { shallow } from 'enzyme'

import { LoginPage } from '../../components/LoginPage'

test('Should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={()=> {}} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should call startLogin on button click', () => {
  const startLoginSpy = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy} />)

  wrapper.find('button').simulate('click')
  expect(startLoginSpy).toHaveBeenCalled()
})