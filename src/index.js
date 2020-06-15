import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './configureStore';
import { name as appName } from '../app.json';
import { createStackNavigator } from '@react-navigation/stack';

// custom components
import AppContainer from './components/containers/AppContainer';
import SearchContainer from './components/containers/SearchContainer';
import SearchDetailContainer from './components/containers/SearchDetailContainer';

const Stack = createStackNavigator();

const Root = () => (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AppContainer" component={AppContainer} />
                <Stack.Screen name="SearchContainer" component={SearchContainer} />
                <Stack.Screen name="SearchDetailContainer" component={SearchDetailContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);