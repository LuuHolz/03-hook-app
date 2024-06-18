import { TodoItem } from "./TodoItem";
import { TodoListProps, Todo } from '../types/todos.types'


const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo: Todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDeleteTodo={(id:number) => onDeleteTodo(id)}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};

export { TodoList };
