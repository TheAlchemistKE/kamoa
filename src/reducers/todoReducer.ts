// todoReducer.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
});

const todoSlice = createSlice({
    name: 'todos',
    initialState: { todos: [] as Todo[], status: 'idle', error: null as string | null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = String(action.error.message);
            });
    },
});

export default todoSlice.reducer;
