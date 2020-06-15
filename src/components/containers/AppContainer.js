// native components
import React from 'react';
import SearchContainer from './SearchContainer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {};

const AppContainer = (props) => {
    return (
        <SearchContainer {...props} />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);