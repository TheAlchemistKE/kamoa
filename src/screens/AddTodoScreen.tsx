import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';


const AddTodoScreen = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo({ title: todoText, completed: false }));
            setTodoText('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter a new todo"
                value={todoText}
                onChangeText={(text) => setTodoText(text)}
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
    );
};

export default AddTodoScreen;
