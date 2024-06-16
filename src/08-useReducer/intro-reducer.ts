

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

//es una funcion pura que tiene un estado y unaccion que le dice como queremos cambiar el estado
const todoReducer = ( state = initialState, action={}) => {

    //regresar un nuevo estado
    if ( action.type === '[TODO] add todo' ) {
        return [...state, action.payload]
    }

    //siempre debe regresar un estado
    return state;
};

let todos = todoReducer();

// si queremos regresar un nuevo estado el reducer mandamos una acion que le dice como modificarse:
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}


//accion
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

                    //estado anterior, accion
todos = todoReducer( todos, addTodoAction );

console.log( todos )