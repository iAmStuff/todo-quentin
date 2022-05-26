import React, { useState } from 'react';

function TodoInput() {
  const [inputValue, setInputValue] = useState('')
  function onChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <input className="new-todo" placeholder="What needs to be done?" value={inputValue} onChange={onChange} />
  )
}

export default TodoInput