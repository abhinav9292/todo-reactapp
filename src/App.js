import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'

class App extends Component {

  state = {
    todos: [
      { id: 1, content: " Call Dad " },
      { id: 2, content: " Call VB " },
      { id: 3, content: " Call Chennu " },
      { id: 4, content: " Call Dinni " }
    ]
  }

  // delete todo from list 
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id;
    })

    this.setState({
      todos: todos
    })
  }

  //add todo list 
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })


  }

  render() {
    return (
      <BrowserRouter>
        <div className="todo-app container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
