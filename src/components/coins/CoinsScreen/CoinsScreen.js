import React, { useState, useEffect, useCallback } from 'react'
import useGetData from '../../../hooks/useGetData'

// Component
import CoinItem from '../CoinItem/CoinItem'
import CoinsSearch from '../CoinsSearch/CoinsSearch'
import Loader from '../../Global/Loader'
import { View, Text, FlatList, RefreshControl, ScrollView } from 'react-native'

// Styles
import { styles } from './styles'

const wait = (timeout) => {
    return new Promise(resolve=> setTimeout(resolve, timeout)) 
}

const CoinsScreen = ({ navigation }) => {
    const [ data, setData ] = useState([])
    const [ allCoins, setAllCoins ] = useState([])
    const [ refreshing, setRefreshing ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        getData()
        fetchData()
    }, [])

    const URL = 'https://api.coinlore.net/api/tickers/?start=0&limit=100'
    const getData = async () => {
        setLoading(true)
        const coins = await useGetData(URL)
        setData(coins.data)
        setAllCoins(coins.data)
        setLoading(false)
    }
    
    const fetchData = async () => {
        const coins = await useGetData(URL)
        setData(coins.data)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        fetchData()
        wait(1000).then(() => setRefreshing(false))
    })

    const onHandlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }

    const onHandleSearch = (query) => {
        const coinsFilter = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                    coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
        setData(coinsFilter)
    }

    return (
        <View style={styles.container}>
            {
                loading === true 
                ? <Loader /> 
                : <ScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={['#867ae9']}
                            progressBackgroundColor={'#121329'}
                            progressViewOffset={20}
                        />
                    }
                >
                    <CoinsSearch onChange={onHandleSearch}/>
                <FlatList 
                    data={data}
                    renderItem={({ item }) => (
                        <CoinItem item={item} onPress={() => onHandlePress(item)} />
                        )}
                    />
                </ScrollView>
            }
        </View>
    )
}

export default CoinsScreen
