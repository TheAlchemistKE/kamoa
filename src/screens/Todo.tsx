import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import TodoList from "../components/TodoList";

export const Todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos</Text>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 15,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 40,
        backgroundColor: '#fff'
    },
});
