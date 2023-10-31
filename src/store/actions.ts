import { Dispatch } from 'redux';

export const FETCH_TODOS = 'FETCH_TODOS';


export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            dispatch({ type: FETCH_TODOS, todos: data });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };
};
