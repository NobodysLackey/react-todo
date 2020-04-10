import React from 'react'
import './TobuyPage.css'
import TobuyList from '../../components/TobuyList/TobuyList'
import AddTobuy from '../../components/AddTobuy/AddTobuy'

function TobuyPage ({title, items, handleAddTobuy, handleDeleteTobuy, handleUpdateTobuy}){
  return (
    <div className='pg-container'>
      <h1>Test to buy page</h1>
      {/* <h1 className='title'>{title}</h1>
      <TobuyList 
        items={items}
        handleDeleteTobuy = {handleDeleteTobuy}
        handleUpdateTobuy = {handleUpdateTobuy}
      />
      <AddTobuy 
        handleAddTobuy={handleAddTobuy}
      /> */}
    </div>
  )
}

export default TobuyPage
