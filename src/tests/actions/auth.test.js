import { login, logout } from '../../actions/auth'

describe('auth actions', () => {
  describe('#LOGIN', () => {
    test('Should generate login action object', () => {
      const actualAction = login('1234qwe')

      expect(actualAction).toEqual({
        type: 'LOGIN',
        uid: '1234qwe'
      }) 
    })
  })

  describe('#LOGOUT', () => {
    test('Should generate logout action object', () => {
      const actualAction = logout()
      
      expect(actualAction).toEqual({ type: 'LOGOUT' })
    })
  })
})