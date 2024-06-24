import React from 'react';
import { TodoItemProps } from '../types/todos.types';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`aling-self-center ${todo.done ? "text-decoration-line-through" : ""}`}
          onClick={() => onToggleTodo(todo.id)}
          arial-label='span'
        >
          {todo.description}
        </span>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>
    </>
  );
};

export { TodoItem };