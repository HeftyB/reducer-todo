import React, { Component } from 'react'
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export class Todo extends Component {
    render() {
        return (
            <div>
                <TodoList 
                    toggles={this.props.toggles}
                    state={this.props.state}
                    />
                <TodoForm 
                    onInputChange={this.props.onInputChange}
                    addItem={this.props.addItem}
                    clearCompleted={this.props.clearCompleted}
                    state={this.props.state}
                    />
            </div>
        )
    }
}

export default Todo
