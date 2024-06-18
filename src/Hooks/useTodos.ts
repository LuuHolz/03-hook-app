import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodos = () => {
  //-----REDUCER-----

  //mi reducer y donde tengo el STATE que se ira modificando por medio de los componentes
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  //-----USE EFFECT-----

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //-----NEW TODO-----
  // payload
  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  //-----ELIMINAR TODO-----

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  //-----TACHAR TODO-----

  const handleToggleTodo = (id) => {
    dispatch({
      type: "Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};

export { useTodos };
