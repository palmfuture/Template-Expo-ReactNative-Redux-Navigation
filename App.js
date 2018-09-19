import { AppRegistry } from 'react-native';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';

import { middleware } from './src/navigators/AppNavigator';
import AppReducer from './src/redux/reducers/reducers';

import {
    ReduxNavigation
} from './src/components';

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        middleware
    )
)
const store = createStore(AppReducer, enhancer);

class App extends Component {

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render() {
        return (
            <Provider store={store}>
                <ReduxNavigation />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ORDERTAKING', () => App);

export default App;