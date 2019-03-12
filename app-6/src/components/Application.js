import React, { Component } from 'react'
import Todo from './Todo'

class Application extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            newTask: '',
        }
    }

    handleUserInput = (input) => {
        this.setState({
            newTask: input
        });
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask],
            newTask: ''
        })
    }

    render() {
        let list = this.state.tasks.map((task, index) => {
            return <Todo key={index} task={task} />;
          });
        return (
            <div>
                <h1>My to-do list:</h1>
                <input value={this.state.newTask} placeholder="Enter New Task" onChange={ (e) => this.handleUserInput(e.target.value)} />
                <button onClick={this.addTask}>Add</button>
                {list}
            </div>
        )
    }
}

export default Application;