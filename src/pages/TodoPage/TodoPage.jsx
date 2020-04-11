import React from 'react'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'
import './TodoPage.css'

function TodoPage (props){

  return (
    <div className='pg-container'>
      <h1 className='title'>{props.title}</h1>
      <TodoList 
        items={props.items}
        handleDeleteTodo = {props.handleDeleteTodo}
        handleUpdateTodo = {props.handleUpdateTodo}
      />
      <AddTodo
        handleAddTodo={props.handleAddTodo}
      />
    </div>
  )
}

export default TodoPage
