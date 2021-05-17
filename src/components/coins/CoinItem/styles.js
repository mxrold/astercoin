import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    card: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 18,
        padding: 10,
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    cardInfo: {
        position: 'relative',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '45%',
    },
    cardInfoBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardBoxRank: {
        position: 'absolute',
        top: -18,
        left: -18,
        width: 25,
        height: 25,
        fontSize: 10,
        fontWeight: '700',
        backgroundColor: Colors.dark4,
        color: Colors.blue1,
        borderRadius: 50,
        textAlignVertical: 'center',
        textAlign: 'center'
        
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
        padding: 6,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.blue4,
        borderRadius: 3.5
    },
    cardPercentBoxTextUp: {
        color: Colors.green
    },
    cardPercentBoxTextDown: {
        color: Colors.red
    }
})