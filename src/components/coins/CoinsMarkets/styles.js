import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    containerMarkets: {
        marginHorizontal: 6,
        padding: 9,
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    containerMarketsName: {
        marginBottom: 6,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.blue4,
        borderBottomWidth: 2,
        borderBottomColor: Colors.dark3
    },
    containerMarketsPrice: {
        flexDirection: 'row',
    },
    containerMarketsPriceCoin: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.blue4
    },
    containerMarketsPriceUsd: {
        fontSize: 12,
        color: Colors.blue4,
        textAlignVertical: 'bottom'
    }
})