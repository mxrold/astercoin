import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    header: {
        paddingTop: 10,
        paddingHorizontal: 26,
        paddingBottom: 26,
        backgroundColor: Colors.dark1,
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
        zIndex: 1,
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
        fontWeight: '700',
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
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 26,
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    headerBottomDivider: {
        width: 2,
        height: '70%',
        backgroundColor: Colors.dark3,
    },
    headerBottomBox: {
        padding: 5,
    },
    headerBottomDate: {
        marginBottom: -6,
        fontSize: 12,
        color: Colors.blue2,
        textAlign: 'center'
    },
    headerBottomText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerBottomUp: {
        color: Colors.green
    },
    headerBottomDown: {
        color: Colors.red
    },
    headerBottomImg: {
        width: 24,
        height: 24
    },
    flatList: {
        top: -20,
        marginHorizontal: 10
    },
    flatListTitle: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: '500',
        color: Colors.blue4
    }
})