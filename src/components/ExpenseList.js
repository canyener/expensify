import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => <ExpenseListItem 
        key={expense.id} 
        description={expense.description} 
        amount={expense.amount} 
        createdAt={expense.createdAt} 
      /> 
    )}
  </div>
)

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseList)
