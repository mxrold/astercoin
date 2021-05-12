import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    card: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 12,
        backgroundColor: Colors.dark1,
        borderRadius: 7
    },
    cardInfo: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '45%',
    },
    cardInfoBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardBoxImg: {
        width: 25,
        height: 25
    },
    cardBoxSymbol: {
        marginLeft: 6,
        fontSize: 25,
        fontWeight: '700',
        color: Colors.blue4
    },
    cardInfoNameText: {
        marginLeft: 31,
        fontSize: 14,
        fontWeight: '500',
        color: Colors.blue4
    },
    cardPrice: {
        alignSelf: 'center',
        width: '27.5%'
    },
    cardPriceText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        color: Colors.blue4
    },
    cardPercent: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        width: '27.5%',
    },
    cardPercentBox: {
        width: '70%',
        marginLeft: '30%',
    },
    cardPercentBoxText: {
        justifyContent: 'flex-end',
        padding: 8,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.blue4,
        borderRadius: 3.5
    },
    cardPercentBoxTextUp: {
        backgroundColor: Colors.green
    },
    cardPercentBoxTextDown: {
        backgroundColor: Colors.red
    }
})