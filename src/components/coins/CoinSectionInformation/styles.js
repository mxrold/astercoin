import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    section: {
        position: 'relative',
        top: -20,
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
    }
})