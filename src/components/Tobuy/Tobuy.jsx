import React from 'react';

function toBuy({item, handleDeleteTobuy, handleUpdateTobuy}){
  function handleClick (){
    let newItem = {...item, ['purchased']: !item.purchased}
    handleUpdateTobuy(newItem)
  }
  return (
    <>
      <td>
      <button
          className='btn btn-xs margin-left-10'
          onClick={() => handleDeleteTobuy(item._id)}
        >X</button>
      </td>
      <td
        style={{'textDecoration': item.purchased ? 'line-through' : '' }}
        onClick={handleClick}
      >
      {item.item}</td>
      <td>{item.price}</td>
    </>
  )
}

export default toBuy