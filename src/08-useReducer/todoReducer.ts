
import { Todo, Action } from './types/todos.types.ts';

export const todoReducer = (initialState : Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "Add Todo":
      // todos que ya estaban + el todo nuevo
      return [...initialState, action.payload];
    case "Remove Todo":
      //voy a regresar todos los TODOS siempre y cuando el todo.id sea diferente del action.payloas(id)
      return initialState.filter((todo) => todo.id !== action.payload);
    case "Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
