import React, { useState, useEffect } from 'react'
import useGetData from '../../../hooks/useGetData'

// Component
import CoinItem from '../CoinItem/CoinItem'
import Loader from '../Global/Loader'
import { View, FlatList } from 'react-native'

// Styles
import { styles } from './styles'

const CoinsScreen = ({ navigation }) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    
    const getData = async () => {
        setLoading(true)
        const URL = 'https://api.coinlore.net/api/tickers/'
        const coins = await useGetData(URL)
        setData(coins.data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const onHandlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }

    return (
        <View style={styles.container}>
            {
                loading && 
                <Loader />
            }
            <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <CoinItem item={item} onPress={() => onHandlePress(item)} />
                )}
            />
        </View>
    )
}

export default CoinsScreen
