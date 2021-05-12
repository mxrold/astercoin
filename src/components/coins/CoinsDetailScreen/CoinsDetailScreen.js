import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const CoinsDetailScreen = ({ route }) => {
    useEffect(() => {
        const { coin } = route.params
        console.log('coin', coin)
    }, [])

    return (
        <View>
            <Text>Coin Detail Screen</Text>
        </View>
    )
}

export default CoinsDetailScreen
