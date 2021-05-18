import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    header: {
        height: '30%',
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
        height: '50%'
    },
    headerTopText: {
        marginLeft: 6,
        fontSize: 25,
        fontWeight: '700',
        color: Colors.light
    },
    headerTopImgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        borderWidth: 2,
        borderColor: Colors.dark3,
        borderRadius: 50
    },
    headerTopImg: {
        width: 24,
        height: 24,
    },
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50%',
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
        marginTop: 6,
        marginRight: 26,
        marginLeft: 26,
        marginBottom: 6,
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