import React, { useState } from "react";
import { View, Text } from "react-native";
import TodoList from "../components/TodoList";

export const Todo = () => {
  return (
    <View>
      <Text>Todos App</Text>
      <TodoList />
    </View>
  );
};
