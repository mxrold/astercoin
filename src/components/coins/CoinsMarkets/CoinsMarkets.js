import React from 'react'
import { View, Text } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

const CoinsMarkets = ({ item }) => {
    return (
        <View style={styles.containerMarkets}>
            <Text style={styles.containerMarketsName}>{item.name}</Text>
            <View style={styles.containerMarketsPrice}>
                <Text style={styles.containerMarketsPriceCoin}>{`$${formatNumbers(item.price_usd)}`}</Text>
                <Text style={styles.containerMarketsPriceUsd}> / USD</Text>
            </View>
        </View>
    )
}

export default CoinsMarkets
