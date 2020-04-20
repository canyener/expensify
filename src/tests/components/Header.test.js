import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../components/Header'

describe('Header', () => {
  describe('#Snapshots', () => {
    test('Should render Header correctly', () => {
      const wrapper = shallow(<Header startLogout={() => {}} />)
      
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('#Functionality', () => {
    test('Should call startLogout on button click', () => {
      const startLogoutSpy = jest.fn()
      const wrapper = shallow(<Header startLogout={startLogoutSpy} />)
    
      wrapper.find('button').simulate('click')
      expect(startLogoutSpy).toHaveBeenCalled()
    })
  })
})


