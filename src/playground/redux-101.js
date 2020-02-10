import { createStore } from 'redux'

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {}) =>({
  type: 'DECREMENT',
  decrementBy
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      } 
    case 'RESET': 
      return {
        count: 0 
      }
    default: 
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

//unsubscribe()

store.dispatch(incrementCount())

store.dispatch({
  type: 'RESET'
})

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch({
  type: 'SET',
  count: 101
})