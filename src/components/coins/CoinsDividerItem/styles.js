import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 22,
        marginBottom: 5
    },
    text: {
        fontSize: 12,
        color: Colors.blue2
    },
    coinText: {
        width: '45%'
    },
    priceText: {
        width: '27.5%',
    },
    percentText: {
        width: '27.5%',
        textAlign: 'center'
    }
})