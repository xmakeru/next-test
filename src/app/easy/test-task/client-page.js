'use client'
import Input from "./components/Input"
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react';

export default function TaskTest() {

    const [taskValue, setTaskValue] = useState('')
    const [taskList, setTaskList] = useState([])
    const [statusTask, setStatusTask] = useState('')
    let copiedTaskList = taskList

    useEffect(() => {
      let savedTaskList = localStorage.getItem('tasks')
      if (savedTaskList) {
        setTaskList(JSON.parse(savedTaskList));
    }
}, [])

    const addTask = (e) => {
      e.preventDefault()
      if (taskValue.trim() === '') {
        return
        }
        const newTask = {
          id: Math.random(),
          value: taskValue,
          status: false
        }
        setTaskList([...taskList, newTask])
        localStorage.setItem('tasks', JSON.stringify([...taskList, newTask]))
        setTaskValue('')
    }

    const deleteAllTasks = () => {
      setTaskList([])
       localStorage.removeItem('tasks')
    }

    const deleteTask = (id) => {
      const updatedTaskList = taskList.filter(e => e.id !== id)
      setTaskList(updatedTaskList)
      localStorage.setItem('tasks', JSON.stringify(updatedTaskList))
    }

    const toggleStatusTask = (id) => {
      let toggleTask = taskList.map((e) => 
        e.id === id ? { ...e, status: !e.status } : { ...e }
      ) 
      setTaskList(toggleTask)
    }

    switch (statusTask) {
      case 'all':
        copiedTaskList = taskList
        break
      case 'done':
        copiedTaskList = taskList.filter((e) => e.status === true)
        break
      case 'active':
        copiedTaskList = taskList.filter((e) => e.status === false)
        break
    }

    
    return (
      <>
      <div>
        <form onSubmit={addTask} className="flex justify-center gap-6 m-2">
          <input 
          value={taskValue} 
          className="rounded w-[100vh] h-[40px]"
          onChange={(e) => setTaskValue(e.target.value)}></input>
          <motion.button
          type="submit"
          className="text-xl bg-green-200 hover:bg-green-300 rounded-xl p-2"
          whileTap={{scale: 0.8}}
          whileHover={{scale: 1.1}}
          >Add</motion.button>
          <motion.button
          onClick={deleteAllTasks}
          className="text-xl bg-red-200 hover:bg-red-300 rounded-xl p-2"
          whileTap={{scale: 0.8}}
          whileHover={{scale: 1.1}}
          >DeleteAll</motion.button>
        </form>
        <div className="flex justify-center">
          <button className="hover:bg-slate-400 w-1/5 rounded"
          onClick={() => setStatusTask('all')}>all</button>
          <button className="hover:bg-slate-400 w-1/5 rounded"
          onClick={() => setStatusTask('done')}>done</button>
          <button className="hover:bg-slate-400 w-1/5 rounded"
          onClick={() => setStatusTask('active')}>active</button>
        </div>
        <div className="flex flex-col items-center">
          {copiedTaskList.map((e) => (
              <div key={e.id} className="flex flex-col my-4 p-2 sm:w-1/2 w-[92%] mx-auto rounded bg-slate-400 justify-between">
                <div className="flex justify-between">
                  <p className="break-all text-xl" style={e.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{e.value}</p>
                  <svg data-slot="icon" fill="none" onClick={() => toggleStatusTask(e.id)}
                  stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" 
                  className="min-w-10 w-10 hover:bg-slate-500 rounded-md h-full active:scale-75 transition"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                  </svg>
                </div>
                <button 
                onClick={() => deleteTask(e.id)}
                className="hover:bg-red-300 rounded-md mt-4">delete</button>
                </div>
          ))}
        </div>
      </div>
      </>
    )
}