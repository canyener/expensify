// Higher Order Component (HOC) - A component (HOC) that renders another component 
// Reuse code
// Remder hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
} 

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('root'))