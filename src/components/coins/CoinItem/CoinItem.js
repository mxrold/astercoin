import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

// Image
import { useGetIcon } from '../../../hooks/useGetIcon'

const CoinItem = ({ item, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardInfo}>
                    <View style={styles.cardInfoBox}>
                        <Text style={styles.cardBoxRank}>{`#${item.rank}`}</Text>
                        <Image style={styles.cardBoxImg} source={{ uri: useGetIcon(item.nameid)}} />
                        <Text style={styles.cardBoxSymbol}>{item.symbol}</Text>
                    </View>
                    <View style={styles.cardInfoName}>
                        <Text style={styles.cardInfoNameText}>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.cardPrice}>
                    <Text style={styles.cardPriceText}>{`$${formatNumbers(item.price_usd)}`}</Text>
                </View>
                <View style={styles.cardPercent}>
                    <View style={styles.cardPercentBox}>
                        <Text style={[styles.cardPercentBoxText, 
                            item.percent_change_1h > 0 ? styles.cardPercentBoxTextUp : styles.cardPercentBoxTextDown ]}>
                                {`${item.percent_change_1h}%`}
                        </Text>
                    </View>
                </View>
            </View>
            
        </Pressable>
    )
}

export default CoinItem