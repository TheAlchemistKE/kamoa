import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import {Todo} from "./src/screens/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
