import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '80%'
    }, 
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: Colors.blue4
    }
})