import React from 'react'
import Task from './Task';

function TodoList( {tasks, toggleTask} ) {
  return (
    tasks.map(task => {
      return <Task key = {task.name} toggleTask = {toggleTask} task = {task}/>
    })
  )
}

export default TodoList