import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as todosAPI from '../../services/todos-api';
import * as tobuysAPI from '../../services/tobuys-api';
import Header from '../Header/Header';
import TodoPage from '../../pages/TodoPage/TodoPage';
import TobuyPage from '../../pages/TobuyPage/TobuyPage';
import Home from '../../pages/Home/Home';

class App extends Component {

  state = {
    todos: [],
    tobuys: []
  }

  async componentDidMount() {
    const todos = await todosAPI.getAll()
    const tobuys = await tobuysAPI.getAll()
    this.setState({
      todos,
      tobuys
    })
  }

  handleAddTodo = async (todo) => {
    const newTodo = await todosAPI.create(todo)
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  handleDeleteTodo = async (id) => {
    await todosAPI.deleteOne(id)
    this.setState({
      todos: this.state.todos.filter(todo => todo._id !== id)
    })
  }

  handleUpdateTodo = async (updatedTodoData) => {
    const updatedTodo = await todosAPI.update(updatedTodoData)
    this.setState({
        todos: this.state.todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo)
    })
  }

  handleUpdateTobuy = async updatedTobuyData => {
    const updatedTobuy = await tobuysAPI.update(updatedTobuyData)
    const newTobuysArray = this.state.tobuys.map(tobuy => tobuy._id === updatedTobuy._id ? updatedTobuy : tobuy)
    this.setState({
      tobuys: newTobuysArray
    })
  }

  handleDeleteTobuy = async id => {
    await tobuysAPI.deleteOne(id)
    this.setState({
      tobuys: this.state.tobuys.filter(tobuy => tobuy._id !== id)
    })
  }
  handleAddTobuy = async tobuy => {
    const newTobuy = await tobuysAPI.create(tobuy)
    this.setState({
      tobuys: [...this.state.tobuys, newTobuy]
    })
  }

  render () {
    return (
      <>
        <Header />
        <Route exact path='/' render={ () =>
          <Home /> 
        }/>
        <Route exact path='/todos' render={ () => 
          <TodoPage
            handleAddTodo={this.handleAddTodo}
            handleDeleteTodo={this.handleDeleteTodo}
            handleUpdateTodo={this.handleUpdateTodo}
            items = {this.state.todos}
            title = {'Todo List'}
          />
        }/>
        <Route exact path='/tobuys' render={ () =>
          <TobuyPage
            handleAddTobuy={this.handleAddTobuy}
            handleDeleteTobuy={this.handleDeleteTobuy}
            handleUpdateTobuy={this.handleUpdateTobuy}
            items = {this.state.tobuys}
            title = {'To Buy List'}
          />
        }/>
      </>
    )
  }
}

export default App