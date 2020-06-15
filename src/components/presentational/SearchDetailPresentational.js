// native components
import React from 'react';
import {
    View,
    SafeAreaView,
    Image,
    Text
} from 'react-native';
import PropTypes from 'prop-types';

// styling/colors/image
import { styles } from '../../styles/styles';

const SearchDetailPresentational = ({ item }) => {
    const { user, tags, imageSize } = item
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.detailViewContainer}>
                <Image
                    style={styles.imageHeight}
                    aspectRatio={3 / 2}
                    resizeMode={'contain'}
                    source={{ uri: item.webformatURL }} />
            </View>
            <View style={styles.detailViewTextContainer}>
                <Text style={styles.detailText}>Uploaded by: {user}</Text>
                <Text style={styles.detailText}>Tags: {tags}</Text>
                <Text style={styles.detailText}>Resolution: {imageSize}</Text>
            </View>
        </SafeAreaView>
    );
}

SearchDetailPresentational.propTypes = {
    item: PropTypes.object.isRequired
}

export default SearchDetailPresentational;