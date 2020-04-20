import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

describe('ExpenseList', () => {
  describe('#Snapshots', () => {
    test('Should render ExpenseList with expenses', () => {
      const wrapper = shallow(<ExpenseList expenses={expenses} />)
      expect(wrapper).toMatchSnapshot()
    })
    
    test('Should render ExpenseList with empty expense array', () => {
      const wrapper = shallow(<ExpenseList expenses={[]} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
