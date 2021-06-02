import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 18,
        paddingBottom: 66,
        paddingHorizontal: 26,
        backgroundColor: Colors.dark2
    },
    informationBottom: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    informationBottomDivider: {
        width: 2,
        height: '70%',
        backgroundColor: Colors.dark3,
    },
    informationBottomBox: {
        padding: 6,
    },
    informationBottomDate: {
        marginBottom: -6,
        fontSize: 12,
        color: Colors.blue2,
        textAlign: 'center'
    },
    informationBottomText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    informationBottomUp: {
        color: Colors.green
    },
    informationBottomDown: {
        color: Colors.red
    },
    informationBottomImg: {
        width: 24,
        height: 24
    },
    section: {
        marginTop: 12,
    },
    sectionContainer: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: Colors.dark4,
        borderRadius: 7
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
    }
})