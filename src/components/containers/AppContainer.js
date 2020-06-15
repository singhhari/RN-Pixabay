// native components
import React from 'react';
import SearchContainer from './SearchContainer';
import { connect } from 'react-redux';

const AppContainer = (props) => (
    <SearchContainer {...props} />
)


export default connect(null, null)(AppContainer);