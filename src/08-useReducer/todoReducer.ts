
export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {

        case 'Add Todo':
                    // todos que ya estaban + el todo nuevo
            return [ ...initialState, action.payload ];
    
        default:
            return initialState;
    }
}