import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import useGetData from '../../../hooks/useGetData'
import Loader from '../../Global/Loader'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

const CoinsMarkets = ({ id }) => {
    const [ markets, setMarkets ] = useState()

    useEffect(() => {
        fetchMarketsData(id)
    }, [])

    const fetchMarketsData = async (coinId) => {
        const URL = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const response = await useGetData(URL)
        setMarkets(response)
    }

    return (
        <View style={styles.containerFlatList}>
            {
                markets === undefined 
                ? <Loader />
                : <FlatList
                    style={styles.flatlist}
                    data={markets}
                    keyExtractor={(item) => `${item.name}-${item.base}-${item.quote}`}
                    columnWrapperStyle={styles.flatListColumn}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View style={styles.containerMarkets}>
                            <Text style={styles.containerMarketsName}>{item.name}</Text>
                            <View style={styles.containerMarketsPrice}>
                                <Text style={styles.containerMarketsPriceCoin}>{`$${formatNumbers(item.price_usd)}`}</Text>
                                <Text style={styles.containerMarketsPriceUsd}> / USD</Text>
                            </View>
                        </View>
                    )}
                />
            }
        </View>        
    )
}

export default CoinsMarkets
