import React from 'react';

function TodoItem(props) {
  return (
    <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{props.value}</label>
      <button className="destroy" />
    </div>
  </li>
  )
}

export default TodoItem