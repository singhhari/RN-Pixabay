/**
 * @format
 */

// native components
import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import store from './configureStore';
import { name as appName } from '../app.json';

// custom components
import AppContainer from './components/containers/AppContainer';
// import SearchContainer from './components/containers/SearchContainer';
// import SearchDetailContainer from './components/containers/SearchDetailContainer';
// import SearchPresentational from './components/presentational/SearchPresentational';
// import SearchDetailPresentational from './components/presentational/SearchDetailPresentational';

const Root = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root);