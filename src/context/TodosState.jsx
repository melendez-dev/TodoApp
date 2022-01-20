// import react
import React, { useEffect, useState } from 'react'
// createContext
import { TodosContext } from './TodosContext'

const TodosState = (props) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  )
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  // filter to delete todos
  const filterTodo = (id) => {
    const deleteTodo = todos.filter(todo => todo.id !== id)
    setTodos(deleteTodo)
  }
  const addTodo = (bodyTodo) => {
    setTodos([...todos, bodyTodo])
  }

  return (
    <TodosContext.Provider value={{
      todos,
      filterTodo,
      addTodo
    }}
    >
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosState
