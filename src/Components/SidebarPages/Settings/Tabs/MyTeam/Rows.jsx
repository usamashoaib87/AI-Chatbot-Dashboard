import React from 'react'
import '../../Settings.scss'
const Rows = (props) => {
  return (
    <div className="row2">
          <p>{props.number}</p>
          <p>JhonDoe</p>
          <p>John@mail.com</p>
          <p>Owner</p>
          <div>Active</div>
          <select>
            <option>Options</option>
            <option>Owner</option>
            <option>Salesman</option>
            <option>Manager</option>
            <option>Staff</option>
          </select>
        </div>
  )
}

export default Rows
