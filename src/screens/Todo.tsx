import React, { useState } from "react";
import {View, Text} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {TodoList} from "../components/TodoList";
export const Todo = () => {
    return (
        <View>
            <Text>Todos App</Text>
            <AddTodo/>
            <TodoList/>
        </View>
    )
}
