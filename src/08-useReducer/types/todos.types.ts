type Todo = {
  id: number;
  description: string;
  done: boolean;
};

type Action =
  | { type: "Add Todo"; payload: Todo }
  | { type: "Remove Todo"; payload: number }
  | { type: "Toggle Todo"; payload: number };

type Props = {
  initialState: Todo[];
};

export type NewTodo = {
    description: string;
  };
  
  export type TodoAddProps = {
    onNewTodo: (todo: Todo) => void;
  };

  type TodoItemProps = {
    todo: Todo;
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
  };

  type TodoListProps = {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
  };