import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class TodoForm extends Component {
    render() {
        return (
            <div className="forms">
                <hr/>
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.addItem(this.props.state.input)}}>
                    <Label>Add a Todo:</Label>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="input" 
                            placeholder="Type a Todo here..."
                            value={this.props.state.input}
                            onChange={this.props.onInputChange}></Input>
                        <Button>Add Todo to List</Button>
                    </FormGroup>
                    <FormText>Click anywhere on a todo to select it</FormText>
                </Form>
                <Button onClick={this.props.clearCompleted}>Clear Selected</Button>
            </div>
        )
    }
}

export default TodoForm
