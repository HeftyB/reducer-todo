import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap';

export default function TodoList(props) {
    const { toggles, state } = props;
    let todos = state.todos.map( (item) => {
                return (
                    <div key={item.id} onClick={() => toggles(item.id)} 
                    className={`item${item.isComplete ? " complete" : ""}`}>
                            <Card body>
                                <CardTitle><h4>{item.title}</h4></CardTitle>
                                <CardText>Id: {item.id}</CardText>
                            </Card>
                    </div>
                )
            })
    return (
        <div>
            <h1>Current Todos:</h1>
            <hr/>
            {todos}            
        </div>
    )
}

