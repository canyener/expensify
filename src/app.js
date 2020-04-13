import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'

import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { firebase } from './firebase/firebase'

const store = configureStore()

firebase.analytics()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'))
})

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    console.log('log in')
  } else {
    console.log('log out')
  }
})