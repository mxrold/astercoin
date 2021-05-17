import React, { useState, useEffect } from 'react'
import useGetData from '../../../hooks/useGetData'

// Component
import CoinItem from '../CoinItem/CoinItem'
import CoinsSearch from '../CoinsSearch/CoinsSearch'
import CoinsDividerItem from '../CoinsDividerItem/CoinsDividerItem'
import Loader from '../../Global/Loader'
import { View, FlatList } from 'react-native'

// Styles
import { styles } from './styles'

const CoinsScreen = ({ navigation }) => {
    const [ data, setData ] = useState([])
    const [ allCoins, setAllCoins ] = useState([])
    const [ loading, setLoading ] = useState(false)
    
    const getData = async () => {
        setLoading(true)
        const URL = 'https://api.coinlore.net/api/tickers/?start=0&limit=100'
        const coins = await useGetData(URL)
        setData(coins.data)
        setAllCoins(coins.data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const onHandlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }

    const onHandleSearch = (query) => {
        const coinsFilter = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                    coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
        console.log(coinsFilter)

        setData(coinsFilter)
    }

    return (
        <View style={styles.container}>
            <CoinsSearch onChange={onHandleSearch}/>
            <CoinsDividerItem />
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
