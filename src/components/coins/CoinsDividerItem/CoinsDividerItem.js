import React from 'react'
import { View, Text } from 'react-native'

// Styles
import { styles } from './styles'

const CoinsDividerItem = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.coinText, styles.text]}>Coin</Text>
            <Text style={[styles.priceText, styles.text]}>Price / USD</Text>
            <Text style={[styles.percentText, styles.text]}>% 1h</Text>
        </View>
    )
}

export default CoinsDividerItem
