// native components
import React from 'react';
import {
    View,
    Text
} from 'react-native';

// styles
import { styles } from '../../styles/styles';

const PlaceholderView = () => (
    <View style={styles.placeholderViewContainer}>
        <Text>Enter a query to see results</Text>
    </View>
)

export default PlaceholderView;