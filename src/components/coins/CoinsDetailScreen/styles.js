import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    header: {
        paddingTop: 5,
        paddingHorizontal: 26,
        backgroundColor: Colors.dark1,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTopImg: {
        flexDirection: 'row',
        width: '75%',
        paddingRight: 30
    },
    headerTopImgContainerDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderWidth: 2,
        borderRadius: 50
    },
    borderFav: {
        borderColor: Colors.purple,
    },
    borderNoFav: {
        borderColor: Colors.dark3,
    },
    headerTopImgContainerDivImg: {
        width: 24,
        height: 24,
    },
    headerTopText: {
        flexWrap: 'wrap',
        marginLeft: 6,
        fontSize: 25,
        fontWeight: '600',
        color: Colors.light
    },
    headerTopContainerIcons: {
        flexDirection: 'row',
        justifyContent:  'space-between',
        alignItems: 'center',
        width: '25%',
    },
    headerTopShare: {
        
    },
    headerTopShareIcon: {
        width: 25,
        height: 25
    },
    headerTopFavorite: {

    },
    headerTopFavoriteIcon: {
        width: 40,
        height: 40
    },

})