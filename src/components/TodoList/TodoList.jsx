import React from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

function TodoList(props){
  if(props.items.length){
  return (
    <div className='container'>
      <table className='table tbl'>
        <tbody>
        {props.items.map(item => 
          <Todo 
            item = {item} 
            key = {item._id}
            handleDeleteTodo = {props.handleDeleteTodo}
            handleUpdateTodo = {props.handleUpdateTodo}
          />
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