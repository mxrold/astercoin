import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2,
        paddingBottom: 100
    },
    categories: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark4,
        borderTopWidth: 1,
        borderTopColor: Colors.dark4,
    },
    categoriesBtn: {
        marginVertical: 10,
        marginRight: 10,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: Colors.dark3,
        borderWidth: 2,
        borderColor: Colors.dark4,
        borderRadius: 50,
    },
    categoriesBtnText: {
        fontSize: 14,
        color: Colors.textMedium,
    }
})