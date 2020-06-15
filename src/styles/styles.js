import { StyleSheet } from 'react-native'
import colors from './colors';
import fonts from './fonts';

const padding = {
    small: 8,
    medium: 12,
    large: 16,
    xl: 24
}

export const styles = StyleSheet.create({
    pixabayLogoContainer: {
        flex: 2,
        alignItems: 'flex-start',
        paddingLeft: padding.large,
        paddingTop: 40
    },
    searchPresentationalContainer: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16
    },
    placeholderViewContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        flex: 2,
        alignItems: 'center',
        paddingLeft: padding.large,
        paddingRight: padding.large
    },
    pixabayLogo: {
        height: 40,
        width: 220,
        tintColor: colors.black
    },
    textInputSubcontainer: {
        flexDirection: 'row',
        borderRadius: padding.medium,
        overflow: 'hidden'
    },
    textInput: {
        flex: 1,
        backgroundColor: colors.black,
        color: colors.white
    },
    magnifyingGlass: {
        tintColor: colors.white,
        backgroundColor: colors.black,
        height: 40,
        width: 40
    },
    photoCellContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: padding.large,
        paddingRight: padding.large,
        paddingTop: padding.small,
        paddingBottom: padding.small
    },
    detailViewContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: padding.large,
        paddingTop: padding.large
    },
    detailViewTextContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    imageHeight: {
        height: 250
    },
    detailText: {
        paddingTop: padding.small,
        paddingBottom: padding.small,
        fontFamily: fonts.cochin,
        fontSize: fonts.large
    }
})