import React from 'react';

function todo(props){
  function handleClick(item){
    let newItem = {...item, 'done': !item.done}
    props.handleUpdateTodo(newItem)
  }
    return (
      <>
        <tr>
          <td>
            <button
                className='btn btn-xs margin-left-10'
                onClick={() => props.handleDeleteTodo(props.item._id)}
            >X</button>
          </td>
          <td>
            <p 
              style={{'textDecoration': props.item.done ? 'line-through' : '' }}
              onClick={() => handleClick(props.item)}
            >
            {props.item.task}
            </p>
          </td>
        </tr>
      </>
    )
}

export default todo;