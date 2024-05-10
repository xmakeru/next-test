'use client'

import React, { useState } from 'react';
import Filter from './components/Filter';
import HeaderTask from './components/HeaderTask';
import Input from './components/Input';
import Task from './components/Task';

export default function TaskManager() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState('');
  let copiTasks = tasks;

  const addTask = () => {
    const taskTodo = {
      id: Math.random(),
      value: todo,
      status: false,
    };
    let newTask = [taskTodo, ...tasks];
    setTasks(newTask);
    setTodo('');
  };

  const deleteTask = (id) => {
    let del = tasks.filter((e) => e.id !== id);
    setTasks(del);
  };

  const toggleTask = (id) => {
    let toggle = tasks.map((e) =>
      e.id === id ? { ...e, status: !e.status } : { ...e }
    );
    setTasks(toggle);
  };

  switch (done) {
    case 'All':
      copiTasks = tasks;
      break;
    case 'Active':
      copiTasks = tasks.filter((e) => e.status === true);
      break;
    case 'Complete':
      copiTasks = tasks.filter((e) => e.status === false);
      break;
  }

  const taskTodoList = copiTasks.map((e) => (
    <Task
      id={e.id}
      value={e.value}
      status={e.status}
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      key={e.id}
    />
  ));

  return (
    <>
      <HeaderTask />
      <Input addTask={addTask} todo={todo} setTodo={setTodo} />
      {taskTodoList}
      <Filter setDone={setDone} />
    </>
  );
}
