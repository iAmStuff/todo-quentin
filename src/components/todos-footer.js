import React from 'react';

function TodosFooter() {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2</strong> items left
      </span>
      <div className="filters">
          <button className="selected">All</button>
          <button>Active</button>
          <button>Completed</button>
      </div>
      <button className="clear-completed">Clear</button>
    </footer>
  )
}

export default TodosFooter