import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    title: {
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 28,
        fontWeight: '500',
        color: Colors.textLight,
        borderBottomWidth: 2,
        borderBottomColor: Colors.purple
    }
})