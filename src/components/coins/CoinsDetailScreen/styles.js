import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    header: {
        height: '35%',
        paddingTop: 10,
        paddingLeft: 26,
        paddingRight: 26,
        paddingBottom: 26,
        backgroundColor: Colors.dark1,
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21,
        zIndex: 1,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '55%'
    },
    headerTopImg: {
        flexDirection: 'row',
        width: '60%'
    },
    headerTopImgContainerDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderWidth: 2,
        borderColor: Colors.dark3,
        borderRadius: 50
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
    headerTopFavorite: {
        width: '40%',
    },
    headerTopFavoriteIcon: {
        alignSelf: 'flex-end',
        width: 30,
        height: 30
    },
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '45%',
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
    section: {
        position: 'relative',
        top: -20,
        height: '45%',
        marginVertical: 6,
        marginHorizontal: 26,
        zIndex: 2,
    },
    sectionContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    sectionContainerText: {
    },
    sectionContainerTextText: {
        marginBottom: 10,
        marginLeft: 6,
        fontSize: 16,
        color: Colors.blue4
    },
    sectionContainerTitle: {
        marginBottom: 5,
        padding: 6,
        backgroundColor: Colors.dark3,
        borderRadius: 3.5
    },
    sectionContainerTitleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.blue4
    },
    flatList: {
        position: 'relative',
        top: -20,
        height: '20%',
        marginHorizontal: 10
    },
    flatListTitle: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: '500',
        color: Colors.blue4
    }
})