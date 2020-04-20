import React from 'react'
import { shallow } from 'enzyme'

import NotFoundPage from '../../components/NotFoundPage'

describe('NotFoundPage', () => {
  describe('#Snapshots', () => {
    test('Should render NotFoundPage correctly', () => {
      const wrapper = shallow(<NotFoundPage />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})