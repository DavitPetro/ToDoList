import React from 'react'

export default function Task( {task, toggleTask} ) {
  
  function handleTaskClick() {
    toggleTask(task.name)
  }
  
  return (
    <div>
      <label className="task">
        <input name={task.name} type="checkbox" checked={task.completed} onChange={handleTaskClick} />
        {task.name}
      </label>
    </div>
  )
}
