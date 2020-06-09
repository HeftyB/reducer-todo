import React, { useReducer } from 'react';
import './App.css';
import Todo from "./components/Todo";
import { initialState, simpleReducer } from "./reducers/simpleReducer";

function App() {
 const [state, dispatch] = useReducer(simpleReducer, initialState);

 const onInputChange = event => {
  dispatch({ type: "UPDATE_INPUT", payload: event.target.value});
 }

 const addItem = () => {
   let newItem = {
     id: Date.now(),
     title: state.input,
     isComplete: false
   };
   dispatch({ type: "UPDATE_TODOS", payload: newItem })
 }
  
 const toggles = itemId => {
  let currentTodoss = state.todos.map( item => {
    console.log(item)
    if (item.id === itemId) {
      return {
        ...item,
        isComplete: !item.isComplete
      } 
    }
    else {
      return item;
    }
  })
  dispatch({ type: "CLEAR_TODOS", payload: currentTodoss })
  }

 const clearCompleted = () => {
   let currentTodoss = state.todos.filter( item => item.isComplete === false);
   dispatch({ type: "CLEAR_TODOS", payload: currentTodoss })
  }

  return (
    <div className="App">
        <div className="wrapper">
          <Todo
            onInputChange={onInputChange}
            addItem={addItem}
            toggles={toggles}
            clearCompleted={clearCompleted}
            state={state}
            />
        </div>
    </div>
  );
}

export default App;
