import React, { Component } from 'react'
import Todo from './todo-list';
import axios from 'axios';

class TodosList extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            }).catch(e => {
                console.log(e);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            }).catch(e => {
                console.log(e);
            })
    }

    todosList = () => {
        return this.state.todos.map((todo, i) => {
            return <Todo key={i} todo={todo} />;
        } );
    }

    render() {
        return(
            <div>
                <h3 style={{marginTop: 20}}>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todosList() }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default TodosList;