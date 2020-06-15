// native components
import React from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// styling/colors/image
import { styles } from '../../styles/styles';
import { magnifyingGlass } from '../../images';

const MagnifyingGlassButton = ({ getPhotos, value }) => (
    <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => getPhotos(value)}>
        <Image
            source={magnifyingGlass}
            style={styles.magnifyingGlass} />
    </TouchableOpacity>
);


MagnifyingGlassButton.propTypes = {
    getPhotos: PropTypes.func,
    value: PropTypes.string
}

export default MagnifyingGlassButton;