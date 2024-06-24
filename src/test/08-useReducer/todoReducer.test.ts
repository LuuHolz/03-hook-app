import { todoReducer } from "../../08-useReducer/todoReducer";
import { Todo, Action } from '../../08-useReducer/types/todos.types'


describe('Pruebas en todoReducer', () => { 

    const initialState: Todo[] = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }]

    test('Debe de regresar el estado inicial', () => {
      
        const newState = todoReducer( initialState, {} as Action);

        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un todo', () => {

        const action: Action = {
            type: "Add Todo",
            payload: {
                id: 2,
                description: 'Nuevo todo',
                done: false,
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('Debe de elimianr un todo', () => {


        const action: Action = {
            type: "Remove Todo",
            payload: 1,
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    });
    
    test('Debe de realizar el Toggle del todo', () => {

        const action: Action = {
            type: "Toggle Todo",
            payload: 1,
        }

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    });
    
 })