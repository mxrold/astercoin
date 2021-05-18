import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    title: {
        marginHorizontal: 10,
        fontSize: 28,
        fontWeight: '500',
        color: Colors.light
    }
})