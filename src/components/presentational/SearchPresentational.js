// native components
import React from 'react';
import {
    View,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

// custom components
import PixabayTextInput from '../wrappers/PixabayTextInput';
import PlaceholderView from '../wrappers/PlaceholderView';

// styling/colors/image
import { styles } from '../../styles/styles';
import {
    pixabayLogo
} from '../../images';

const PER_PAGE = 20

const PhotoCell = ({ item, navigation }) => {
    return (
        <View style={styles.photoCellContainer}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                    navigation.push('SearchDetailContainer', { item })}>
                <Image
                    style={styles.imageHeight}
                    aspectRatio={3 / 2}
                    resizeMode={'contain'}
                    source={{ uri: item.webformatURL }} />
            </TouchableOpacity>
        </View>
    )
};

const SearchPresentational = ({ photos, getPhotos, getMorePhotos, navigation }) => {
    const { hits } = photos
    const onEndReached = () => {
        const { page, total, query } = photos
        if (page * PER_PAGE < total) {
            getMorePhotos(query, page)
        }
    }

    const renderFlatList = () => {
        if (hits.length) {
            return (
                <FlatList
                    data={photos.hits}
                    renderItem={(hit) => <PhotoCell
                        item={hit.item}
                        navigation={navigation} />}
                    keyExtractor={(item, index) => `list-item-${index}`}
                    onEndReachedThreshold={0.6}
                    onEndReached={() => onEndReached({ photos, getMorePhotos })}
                />);
        }
        return (<PlaceholderView />);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={styles.searchPresentationalContainer}>
                <Image
                    source={pixabayLogo}
                    style={styles.pixabayLogo} />
                <View
                    style={{ paddingTop: 16 }}>
                    <PixabayTextInput
                        getPhotos={getPhotos} />
                </View>
                {renderFlatList()}
            </View>
        </SafeAreaView>
    );
}

SearchPresentational.propTypes = {
    photos: PropTypes.object,
    getPhotos: PropTypes.func.isRequired,
    getMorePhotos: PropTypes.func.isRequired,
    navigation: PropTypes.object
}

export default SearchPresentational;