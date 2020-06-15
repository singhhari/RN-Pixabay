// native components
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// custom components
import SearchPresentational from '../presentational/SearchPresentational';

// actions/reducers
import { getPhotos, getMorePhotos } from '../../reducers/photosReducer';

const mapStateToProps = (state) => {
    return {
        photos: state.photos
    }

}
const mapDispatchToProps = {
    getPhotos,
    getMorePhotos
};

const SearchContainer = (props) => {
    return (
        <SearchPresentational {...props} />
    );
}

SearchContainer.propTypes = {
    photos: PropTypes.object,
    getPhotos: PropTypes.func.isRequired,
    getMorePhotos: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);