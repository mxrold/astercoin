import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    containerFlatList: {
        flex: 1,
        paddingTop: 18,
        paddingHorizontal: 10,
        backgroundColor: Colors.dark2,
    },
    flatlist: {
    },
    flatListColumn: {
        justifyContent: 'space-between'
    },
    flatListTitle: {
        marginLeft: 10,
        fontSize: 22,
        fontWeight: '500',
        color: Colors.textLight
    },
    containerMarkets: {
        width: '45%',
        marginHorizontal: 6,
        marginBottom: 12,
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
        fontWeight: '500',
        color: Colors.textMedium
    },
    containerMarketsPriceUsd: {
        fontSize: 12,
        color: Colors.textMedium,
        textAlignVertical: 'bottom'
    }
})