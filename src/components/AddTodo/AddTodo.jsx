import React, {Component} from 'react'
import './AddTodo.css'
class AddTodo extends Component {
  state = {
    formData: {
      task: '',
      done: false
    }
  }

  handleChange = e => {
    if(e.target.name === 'done'){
      e.target.value = !this.state.formData.done
    } 
    this.setState({
      formData: {...this.state.formData, [e.target.name]:e.target.value}
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddTodo(this.state.formData)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <span>Task:</span>
        <input 
          name='task' 
          value={this.state.formData.task} 
          onChange={this.handleChange}
        />
        <span>Done:</span>
        <input 
          type='checkbox'
          name='done'
          value={this.state.formData.done}
          onChange={this.handleChange}
        />
        <input type='submit' value='Add To Do' />
      </form>
    )
  }
}

export default AddTodo