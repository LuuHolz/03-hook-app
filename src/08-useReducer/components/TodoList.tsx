import { TodoItem } from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={ todo.id }/>
        ))}
      </ul>
    </>
  );
};

export { TodoList };
