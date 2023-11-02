import React, { useEffect, useState } from "react";
import { fetchTodos, Todo } from "../api/api";
import {
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((response: any) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomWidth: 1,
              borderStyle: "solid",
              borderColor: "#ecf0f1",
            }}
            onPress={() => {
              console.log(item);
            }}
          >
            <View
              style={{
                flex: 3,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {item.completed ? (
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >{`${item.title} `}</Text>
              ) : (
                <Text>{`${item.title}`}</Text>
              )}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              {item.completed ? (
                <Icon name="ios-checkbox" size={30} color={primaryColor}></Icon>
              ) : (
                <Icon
                  name="ios-square-outline"
                  size={30}
                  color={darkGrey}
                ></Icon>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const primaryColor = "#1abc9c";
const lightGrey = "#ecf0f1";
const darkGrey = "#bdc3c7";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 0,
  },
  containerFooter: {
    height: 50,
    backgroundColor: "#1abc9c",
    padding: 5,
    flexDirection: "row",
  },
  searchContainer: {
    flex: 1,
    padding: 5,

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
});
