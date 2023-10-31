// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './src/store/store';
import TodoListScreen from './src/screens/TodoListScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Todo List" component={TodoListScreen} />
            <Tab.Screen name="Add Todo" component={AddTodoScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
