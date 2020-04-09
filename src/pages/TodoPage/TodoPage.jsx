import React from 'react'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'
import './TodoPage.css'

function TodoPage ({title, items, handleAddTodo, handleDeleteTodo, handleUpdateTodo}){

  return (
    <div className='pg-container'>
      <h1 className='title'>{title}</h1>
      <TodoList 
        items={items}
        handleDeleteTodo = {handleDeleteTodo}
        handleUpdateTodo = {handleUpdateTodo}
      />
      <AddTodo
        handleAddTodo={handleAddTodo}
      />
    </div>
  )
}

export default TodoPage
