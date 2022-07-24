/*Script file for the To-do list*/
import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef() 

  function addTask(event) {
    const name = taskNameRef.current.value
    if(name === ""){ 
      return
    }
    //todo: find a way to get unique id's
    setTasks(prevTasks => {
      return [...prevTasks, {id: 1, name: name, completed: false}]
    })
    taskNameRef.current.value = null
  }

  return (
    <>
      <TodoList tasks={tasks}/>
      <input ref={taskNameRef} type="text" />
      <button>Add Task</button>
      <button onClick={addTask}>Clear Completed Tasks</button>
      <button>Clear All</button>
      <div>0 Tasks left</div>
    </>
  )
}

export default App;
