import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const useTodos = () => {
  //-----REDUCER-----

  //mi reducer y donde tengo el STATE que se ira modificando por medio de los componentes
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //-----USE EFFECT-----

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //-----NEW TODO-----
  // payload
  const handleNewTodo = (todo: Todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  //-----ELIMINAR TODO-----

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  //-----TACHAR TODO-----

  const handleToggleTodo = (id: number) => {
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
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};

export { useTodos };
