import { ADD_TODO, FETCH_TODOS } from './actions';

const initialState = {
    todos: [],
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] };
        case FETCH_TODOS:
            return { ...state, todos: action.todos };
        default:
            return state;
    }
};

export default reducer;
