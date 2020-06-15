// native components
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchDetailPresentational from '../presentational/SearchDetailPresentational';

// custom components
// import SearchPresentational from '../presentational/SearchPresentational';

// actions/reducers
// import { getPhotos, getMorePhotos } from '../../reducers/photosReducer';

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }
}
const mapDispatchToProps = {};

const SearchDetailContainer = (props) => {
    return (
        <SearchDetailPresentational />
    );
}

// SearchContainer.propTypes = {
//     photos: PropTypes.object,
//     getPhotos: PropTypes.func.isRequired,
//     getMorePhotos: PropTypes.func.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchDetailContainer);