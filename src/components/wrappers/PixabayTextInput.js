// native components
import React from 'react';
import {
    TextInput,
    View
} from 'react-native';
import PropTypes from 'prop-types';

// custom components
import MagnifyingGlassButton from './MagnifyingGlassButton';

// styling/colors/image
import { styles } from '../../styles/styles';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

// constants
const SEARCH = 'search';
const PLACEHOLDER = '  Search free images ...';

const PixabayTextInput = ({ getPhotos }) => {
    const [value, onChangeText] = React.useState('');
    return (
        <View style={styles.textInputSubcontainer}>
            <TextInput
                value={value}
                onChangeText={text => onChangeText(text)}
                onSubmitEditing={() => getPhotos(value)}
                style={styles.textInput}
                fontSize={fonts.large}
                placeholder={PLACEHOLDER}
                placeholderTextColor={colors.gray}
                numberOfLines={1}
                returnKeyType={SEARCH} />
            <MagnifyingGlassButton
                getPhotos={getPhotos}
                value={value} />
        </View>
    );
}

PixabayTextInput.propTypes = {
    getPhotos: PropTypes.func
}

export default PixabayTextInput;