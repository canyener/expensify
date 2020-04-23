import authReducer from '../../reducers/auth'

describe('auth reducer', () => {
  describe('#Initialize', () => {
    test('Should setup default state', () => {
      const state = authReducer(undefined, { type: '@@INIT' })
      expect(state).toEqual({})
    })
  })
  
  describe('#LOGIN', () => {
    test('Should set uid for login', () => {
      const action = { type: 'LOGIN', uid: '123qwe'}
      const state = authReducer(undefined, action)

      expect(state.uid).toBe('123qwe')
    })
  })

  describe('#LOGOUT', () => {
    test('Should clear uid for logout', () => {
      const action = { type: 'LOGOUT' }
      const state = authReducer({ uid: '123qwe' }, action)

      expect(state).toEqual({})
    })
  })
})