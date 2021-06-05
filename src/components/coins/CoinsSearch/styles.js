import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark2
    },
    textInput: {
        height: 40,
        marginHorizontal: 18,
        marginVertical: 7,
        paddingHorizontal: 16,
        fontSize: 14,
        backgroundColor: Colors.dark3,
        color: Colors.textMedium,
        borderRadius: 30
    }
})