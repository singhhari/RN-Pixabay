// native components
import React from 'react';
import { connect } from 'react-redux';

// custom components
import SearchDetailPresentational from '../presentational/SearchDetailPresentational';

const SearchDetailContainer = ({ route }) => {
    return (
        <SearchDetailPresentational
            item={route.params.item}
        />
    );
}

export default connect(null, null)(SearchDetailContainer);