import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";

export const TodoList = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <View>
      <Text>Todos</Text>
      {todos.map((todo: any, index: any) => {
        <Text key={todo.id}>
          {`${index + 1}`}. ${todo.text}
        </Text>;
      })}
    </View>
  );
};
