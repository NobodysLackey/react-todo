import React, {Component} from 'react'
import './AddTobuy.css'

class AddTobuy extends Component {
  state = {
    formData: {
      item: '',
      price: 0,
      purchased: false,
    }
  }

  handleChange = e => {
    if(e.target.name === 'purchased'){
      e.target.value = !this.state.formData.done
    }
    this.setState({
      formData: {...this.state.formData, [e.target.name]:e.target.value}
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddTobuy(this.state.formData)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <div>
        <label>
          Item: 
        </label>
        <input 
          name='item' 
          value={this.state.formData.item} 
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label>
          Price: 
        </label>
        <input 
          name='price' 
          value={this.state.formData.price} 
          onChange={this.handleChange}
        />
        </div>
        <div>
        <label>Purchased: </label>
        <input 
          type='checkbox'
          name='purchased'
          value={this.state.formData.purchased}
          onChange={this.handleChange}
        />
        </div> 
        <input type='submit' value='Add To Do' />
      </form>
    )
  }
}

export default AddTobuy