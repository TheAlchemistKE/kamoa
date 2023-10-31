import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/actions';

const TodoListScreen = () => {
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos);

    useEffect(() => {
        // dispatch();
    }, []);

    return (
        <View>
            <Text>Todo List</Text>
            {/*<FlatList*/}
            {/*    data={todos}*/}
            {/*    keyExtractor={(item) => item.id.toString()}*/}
            {/*    renderItem={({ item }) => <Text>{item.title}</Text>}*/}
            {/*/>*/}
        </View>
    );
};

export default TodoListScreen;
