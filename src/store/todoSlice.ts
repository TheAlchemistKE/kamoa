import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state: any, action: any) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleCompleteStatus(state: any, action: any) {
      const todo = state.find((todo: any) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleCompleteStatus } = todoSlice.actions;

export default todoSlice.reducer;
