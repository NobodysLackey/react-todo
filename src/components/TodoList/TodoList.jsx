import React from 'react';
import Todo from '../Todo/Todo'
import './TodoList.css'

function TodoList({items, handleDeleteTodo, handleUpdateTodo}){
  if(items.length){
  return (
    <div className='container'>
      <table className='table tbl'>
        <tbody>
        {items.map(item => 
          <tr>
          <Todo 
            item = {item} 
            key = {item._id}
            handleDeleteTodo = {handleDeleteTodo}
            handleUpdateTodo = {handleUpdateTodo}
          />
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
  }else{
    return (
      <h1>You don't have anything in this list yet!</h1>
    )
  }
}

export default TodoList