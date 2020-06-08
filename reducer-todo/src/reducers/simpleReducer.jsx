export const initialState = {
  todos: [
    {
      id: Date.now(),
      title: "inital todo",
      isComplete: false
    },
  ],
  input: ""
};

export const simpleReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TODOS":
          return {
            ...state,
            todos: [...state.todos, action.payload],
            input: ""
          };
        case "CLEAR_TODOS":
          return {
            ...state,
            todos: action.payload
          }
        case "UPDATE_INPUT":
          return {
            ...state,
            input: action.payload
          };
        default:
          return state;
      }
}
