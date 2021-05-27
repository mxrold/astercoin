import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    containerTitle: {

    },
    containerTitleText: {
        marginBottom: 5,
        fontSize: 22,
        fontWeight: '500',
        color: Colors.blue4
    },
    containerCategories: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    separator: {
        width: 2,
        height: '70%',
        backgroundColor: Colors.dark3,
    }, 
    containerCategoriesBox: {
        padding: 16,
    },
    containerCategoriesTitle: {
        fontSize: 16,
    },
})