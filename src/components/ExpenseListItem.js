import React from 'react'

const ExpenseListItem  = (props) => (
  <div>
    {props.description} {props.amount} {props.createdAt} 
  </div>
)

export default ExpenseListItem