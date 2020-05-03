import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { 
  addExpense, 
  startAddExpense, 
  editExpense,
  startEditExpense, 
  removeExpense,
  startRemoveExpense ,
  setExpenses, 
  startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'

import database from '../../firebase/firebase'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

afterAll(() => {
  database.goOffline()
})

describe('expenses actions', () => {
  describe('#REMOVE_EXPENSE', () => {
    test('Should setup remove expense action object', () => {
      const actualAction = removeExpense({ id: '123abc' })
      expect(actualAction).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
      })
    })

    test('Should remove expense from firebase', (done) => {
      const store = createMockStore(defaultAuthState)
      const id = expenses[2].id
    
      store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
          type: 'REMOVE_EXPENSE',
          id
        })
    
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
      }).then(snapshot => {
        expect(snapshot.val()).toBeFalsy()
        done()
      })  
    })
  })

  describe('#EDIT_EXPENSE', () => {
    test('Should setup edit expense action object', () => {
      const actualAction = editExpense('123abc', { description: 'test description', note: 'test note' })
      expect(actualAction).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
          description: 'test description',
          note: 'test note'
        }
      })
    })

    test('Should edit expense from firebase', (done) => {
      const store = createMockStore(defaultAuthState)
    
      const id = expenses[0].id
      const updates = {
        description: 'updated description',
        amount: '99999',
        createdAt: 100000,
        note: 'updated note'
      }
    
      store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions()
    
        expect(actions[0]).toEqual({
          type: 'EDIT_EXPENSE',
          id,
          updates
        })
        
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
      }).then(snapshot => {
        expect(snapshot.val()).toEqual(updates)
        done()
      })
    })
  })

  describe('#ADD_EXPENSE', () => {
    test('Should setup add expense action object with provided values', () => {
      const action = addExpense(expenses[2])
    
      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
      })
    })

    test('Should add expense to database and store', (done) => {
      const store = createMockStore(defaultAuthState)
    
      const expenseData = {
        description: 'Test desc',
        amount: 3000,
        note: 'Test note',
        createdAt: 1000
      }
    
      store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
    
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        })
    
        return database.ref(`/users/${uid}/expenses/${actions[0].expense.id}`).once('value')
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
      })
    })

    test('Should add expense with default values to database and store', (done) => {
      const store = createMockStore(defaultAuthState)
    
      const expectedExpense = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
      }
    
      store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
    
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expectedExpense
          }
        })
    
        return database.ref(`/users/${uid}/expenses/${actions[0].expense.id}`).once('value')
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expectedExpense)
        done()
      })
    })    
  })

  describe('#SET_EXPENSES', () => {
    test('Should setup set expense action object with data', () => {
      const action = setExpenses(expenses)
      expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
      })
    })
    
    test('Should fetch the expenses from firebase', (done) => {
      const store = createMockStore(defaultAuthState)
    
      store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
          type: 'SET_EXPENSES',
          expenses
        })
        done()
      })
    })
  })
})















