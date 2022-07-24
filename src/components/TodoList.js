import React from 'react'
import Task from './Task';

function TodoList( {tasks} ) {
  return (
    tasks.map(task => {
      return <Task key = {task.id} task = {task}/>
    })
  )
}

export default TodoList