import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Button, TextInput, View } from "react-native";

export const AddTodo = () => {
  const [text, setText]: any = useState();

  const handleSubmit = () => {
    useDispatch(addTodo(text));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a Todo Item"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};
