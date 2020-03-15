import React from 'react'
import { connect } from 'react-redux'

import { DateRangePicker } from 'react-dates'

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state= {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(e) =>{
            this.props.dispatch(setTextFilter(e.target.value))
          }} 
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={(e) => {
            const sortBy = e.target.value
            if (sortBy === 'date') {
              this.props.dispatch(sortByDate())
            } else if (sortBy === 'amount') {
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="startDateId"
          endDate={this.props.filters.endDate}
          endDateId="endDateId"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={() => 'DD.MM.YYYY'}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)