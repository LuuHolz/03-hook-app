import { fireEvent, render, screen } from '@testing-library/react';
import { Todo } from '../../08-useReducer/types/todos.types';
import  TodoItem  from '../../08-useReducer/components/TodoItem';
import '@testing-library/jest-dom';

describe('Pruebas en TodoItem', () => { 

    const todo: Todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Resetear/limpiar las funciones en cada test
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente Todo Pendiente de completar', () => {
        render( 
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />          
            
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");
      
        const spanElement = screen.getByRole('span');
        expect( spanElement.className ).toBe('aling-self-center ');
    });


    test('Debe de mostrar el componente Todo completado', () => {

        todo.done = true;

        render( 
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />          
            
        );
      
        const spanElement = screen.getByRole('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {

        render( 
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />          
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        //que haya sido llamda esa funcion y que le haya madnado el argumento id(1)
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
      
    });

    test('button debe de llamar el deleteTodo', () => {

        render( 
            <TodoItem
                todo={ todo }
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock }
            />          
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
      
    })
    
    
})