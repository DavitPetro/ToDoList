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
    const newTasks = tasks.filter(task => !task.completed)
    setTasks(newTasks)
  }

  function clearTasks() {
    setTasks([])
  }

  return (
    <>
      <h3>Date: {date}</h3>
      <button onClick={addTask}>Add Task</button>
      <input ref={taskNameRef} type="text" />
      <TodoList tasks={tasks} toggleTask={toggleTask}/>
      <button onClick = {clearCompleted}>Clear Completed Tasks</button>
      <button onClick = {clearTasks}>Clear All</button>
      <div>{tasks.filter (todo => !todo.completed).length} Tasks left</div>
    </>
  )
}

export default App;
