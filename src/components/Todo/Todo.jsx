import React from 'react'

function todo(props){
  // function handleClick(item){
  //   let newItem = {...item, ['done']: !item.done}
  //   props.handleUpdateTodo(newItem)
  // }
    return (
      <>
        <td>
          {/* <button
              className='btn btn-xs margin-left-10'
              onClick={() => props.handleDeleteTodo(item)}
          >X</button> */}
        </td>
        <td>
          <p 
            style={{'textDecoration': item.done ? 'line-through' : '' }}
            // onClick={()=>props.handleClick(item)}
          >
          {props.item.task}
          </p>
        </td>
      </>
    )
}

export default todo