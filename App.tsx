import React from "react";

import AppNavigator from "./src/navigation/AppNavigator";
import {Provider} from "react-redux";

import {Todo} from "./src/screens/Todo";
import store from "./src/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}
