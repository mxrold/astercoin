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
        marginTop: 15,
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
        color: Colors.textDark,
        borderRadius: 50,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    cardBoxImg: {
        width: 22,
        height: 22,
        borderRadius: 50
    },
    cardBoxSymbol: {
        marginLeft: 6,
        fontSize: 22,
        fontWeight: '700',
        color: Colors.textLight
    },
    cardInfoNameText: {
        marginLeft: 28,
        paddingRight: 10,
        fontSize: 14,
        fontWeight: '500',
        color: Colors.textMedium
    },
    cardPrice: {
        alignSelf: 'center',
        width: '27.5%'
    },
    cardPriceText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'left',
        color: Colors.textLight
    },
    cardPercent: {
        alignSelf: 'center',
        justifyContent: 'flex-end',
        width: '27.5%',
    },
    cardPercentBox: {
        flexDirection: 'row',
        width: '90%',
        marginLeft: '10%',
        padding: 6,
    },
    cardPercentBoxImg: {
        alignSelf: 'center',
        width: 24,
        height: 24
    },
    cardPercentBoxText: {
        justifyContent: 'flex-end',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    cardPercentBoxTextUp: {
        color: Colors.green
    },
    cardPercentBoxTextDown: {
        color: Colors.red
    }
})