import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExportDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)

export default ExportDashboardPage