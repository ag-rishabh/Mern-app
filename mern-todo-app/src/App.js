import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import TodosList from './components/Todos-list';
import EditTodo from './components/Edit-todo';
import CreateTodo from './components/Create-todo.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
