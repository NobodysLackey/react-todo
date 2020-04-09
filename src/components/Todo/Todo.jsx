import React from 'react'

function todo({item, handleDeleteTodo, handleUpdateTodo}){
  function handleClick(item){
    console.log('mmmm')
    let newItem = {...item, ['done']: !item.done}
    console.log(item)
    handleUpdateTodo(newItem)
  }
    return (
      <>
        <td>
          <button
              className='btn btn-xs margin-left-10'
              onClick={() => handleDeleteTodo(item)}
          >X</button>
        </td>
        <td>
          <p 
            style={{'textDecoration': item.done ? 'line-through' : '' }}
            onClick={()=>handleClick(item)}
          >
          {item.task}
          </p>
        </td>
      </>
    )
}

export default todo