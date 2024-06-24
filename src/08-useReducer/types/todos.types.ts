export type Todo = {
  id: number;
  description: string;
  done: boolean;
};

export type Action =
  | { type: "Add Todo"; payload: Todo }
  | { type: "Remove Todo"; payload: number }
  | { type: "Toggle Todo"; payload: number };

export type NewTodo = {
  description: string;
};

export type TodoAddProps = {
  onNewTodo: (todo: Todo) => void;
};

export type TodoItemProps = {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

export type TodoListProps = {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};