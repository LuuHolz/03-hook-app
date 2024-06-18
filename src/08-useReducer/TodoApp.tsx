import { useTodos } from "../Hooks/useTodos";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";



const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();



  return (
    <>
      <h1>
        TodoApp: 10 <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
            />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
            <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  );
};

export { TodoApp };
