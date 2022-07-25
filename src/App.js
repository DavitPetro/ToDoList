/*Script file for the To-do list*/
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';

const storageKey = "taskApp.tasks"

function App() {
  // Get today's date
  const currentDate = new Date()
  const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`

  const [tasks, setTasks] = useState([])
  const taskNameRef = useRef() 

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(storageKey))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(name) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.name === name)
    task.completed = !task.completed
    setTasks(newTasks)
  }

  function addTask(event) {
    const name = taskNameRef.current.value
    if(name === ""){ 
      return
    }
    setTasks(prevTasks => {
      return [...prevTasks, {name: name, completed: false}]
    })
    taskNameRef.current.value = null
  }

  function clearCompleted() {
    const newTasks = tasks.filter(task => task.completed)
    setTasks(newTasks)
  }

  function clearTasks() {
    setTasks([])
  }

  return (
    <div id="content">
      <div className="row">
        <div className="col">
          <h3>Date: {date}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <input id="text-box" ref={taskNameRef} placeholder="Enter a Task for Today" type="text" />
        </div>
        <div className="col">
          <button className="btn btn-success" onClick={addTask}>Add Task</button>
        </div>
      </div>
      <TodoList tasks={tasks} toggleTask={toggleTask}/>
      <button className="btn btn-primary" onClick = {clearCompleted}>Clear Completed Tasks</button>
      <button className="btn btn-danger" onClick = {clearTasks}>Clear All</button>
      <h3>{tasks.filter (todo => !todo.completed).length} Tasks left</h3>
    </div>
  )
}

export default App;
