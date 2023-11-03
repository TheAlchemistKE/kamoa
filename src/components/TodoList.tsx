import React, { useEffect } from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import { Checkbox, List } from 'react-native-paper'; // Import Checkbox and List from react-native-paper
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../store/store";
import {fetchTodos} from "../reducers/todoReducer";


const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const status = useSelector((state: RootState) => state.todos.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTodos());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Text>Loading...</Text>;
    }

    if (status === 'failed') {
        return <Text>Error: An error occurred while fetching data.</Text>;
    }

    return (
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <List.Item
                    title={item.title}
                    left={() => (
                        <Checkbox
                            status={item.completed ? 'checked' : 'unchecked'}
                            color="blue"
                        />
                    )}
                />
            )}
        />
    );
};



export default TodoList;
