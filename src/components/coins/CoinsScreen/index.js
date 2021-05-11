import React, { useEffect } from 'react'
import useGetData from '../../../hooks/useGetData'
import { View, Text } from 'react-native'

const CoinsScreen = () => {
    const URL = 'https://api.coinlore.net/api/tickers/'
    const coins = useGetData(URL)
    console.log('coins', coins)

    return (
        <View>
            <Text>Coins Screen</Text>
        </View>
    )
}

export default CoinsScreen
