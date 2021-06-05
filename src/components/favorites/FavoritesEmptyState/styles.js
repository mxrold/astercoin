import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '60%'
    }, 
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.textLight
    }
})