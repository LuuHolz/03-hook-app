import { render, screen } from "@testing-library/react";
import  { TodoApp }  from "../../08-useReducer/TodoApp";
import { useTodos } from "../../Hooks/useTodos";


jest.mock('../../Hooks/useTodos');

describe('Pruebas en componente TodoApp', () => { 

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true }
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1,
    })

    test('Debe de mostrar el componente correctamente', () => {

        render( <TodoApp/>)
        // screen.debug();

        //se espera que el texto exista
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    });
    
 });