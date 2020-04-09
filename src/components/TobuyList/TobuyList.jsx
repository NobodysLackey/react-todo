import React from 'react';
import Tobuy from '../Tobuy/Tobuy'
import './TobuyList.css'

function TobuyList({items, handleDeleteTobuy, handleUpdateTobuy}){
  if(items.length){
  return (
    <div className='container'>
      <table className='table tbl'>
        <tbody>
          {items.map(item => 
        <tr>
            <Tobuy 
              item = {item} 
              key = {item._id}
              handleDeleteTobuy = {handleDeleteTobuy}
              handleUpdateTobuy = {handleUpdateTobuy}
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

export default TobuyList