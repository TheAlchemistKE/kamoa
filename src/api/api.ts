import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoList = Todo[];
export const fetchTodos = async (): Promise<any> => {
  try {
    return await axios.get<TodoList>(
      "https://jsonplaceholder.typicode.com/todos",
    );
  } catch (e) {
    console.log(e);
  }
};
