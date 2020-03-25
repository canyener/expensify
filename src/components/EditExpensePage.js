import React from 'react'
import { connect } from 'react-redux'

import { editExpense, removeExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(editExpense(this.props.expense.id, expense))
    this.props.history.push('/')
  }
  onRemove =() => {
    this.props.dispatch(removeExpense({ id: this.props.expense.id }))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense} 
          onSubmit={this.onSubmit} 
        />
        <button 
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage)