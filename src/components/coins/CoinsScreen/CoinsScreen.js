import React, { useState, useEffect, useCallback } from 'react'
import useGetData from '../../../hooks/useGetData'

// Component
import CoinItem from '../CoinItem/CoinItem'
import CoinsSearch from '../CoinsSearch/CoinsSearch'
import Loader from '../../Global/Loader'
import { View, Text, FlatList, RefreshControl, TouchableHighlight, Image } from 'react-native'

// Styles
import { styles } from './styles'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout)) 
}

const CoinsScreen = ({ navigation }) => {
    const [ data, setData ] = useState([])
    const [ allCoins, setAllCoins ] = useState([])
    const [ refreshing, setRefreshing ] = useState(false)
    const [ isReverse, setIsReverse ] = useState(false)
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

    const dataHandleFilter = [
        {
            id: 1,
            title: 'Rank',
            param: 'rank'
        },
        {
            id: 2,
            title: 'Name',
            param: 'abc'
        },
        {
            id: 3,
            title: 'Price',
            param: 'price'
        },
        {
            id: 4,
            title: 'Percent 1h',
            param: 'percent'
        }
    ]

    const handleFilter = (value) => {
        setIsReverse(!isReverse)
        data.sort((a, b) => {
            if(value === 'rank') {
                if(isReverse === true) {
                    return a.rank - b.rank
                }  else {
                    return b.rank - a.rank
                } 
            } 
            else if(value === 'abc') {
                if (isReverse === true) {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                } else {
                    if (b.name > a.name) {
                        return 1
                    }
                    if (b.name < a.name) {
                        return -1
                    }
                }
            }
            else if(value === 'price') {
                if(isReverse === true) {
                    return a.price_usd - b.price_usd
                }  else {
                    return b.price_usd - a.price_usd
                } 
            }
            else if(value === 'percent') {
                if(isReverse === true) {
                    return a.percent_change_1h - b.percent_change_1h
                }  else {
                    return b.percent_change_1h - a.percent_change_1h
                } 
            }
            else {
                return
            }
        })
    }

    return (
        <View style={styles.container}>
            {
                loading === true 
                ? <Loader /> 
                : <View >
                    <>
                        <CoinsSearch onChange={onHandleSearch}/>
                        
                        <View style={styles.categories}>
                            <FlatList 
                                data={dataHandleFilter}
                                keyExtractor={( item ) => `filter-${item.id}-${item.param}`}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <TouchableHighlight 
                                        style={styles.categoriesBtn} 
                                        activeOpacity={0.3}
                                        underlayColor="#1b1d39"
                                        onPress={() => handleFilter(item.param)}
                                    >
                                        <Text style={styles.categoriesBtnText}>{item.title}</Text>
                                    </TouchableHighlight>
                                )}
                            />
                        </View>
                       
                        <FlatList 
                            data={data}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                    colors={['#867ae9']}
                                    progressBackgroundColor={'#121329'}
                                    progressViewOffset={20}
                                />
                            }
                            renderItem={({ item }) => (
                                <CoinItem item={item} onPress={() => onHandlePress(item)} />
                                )}
                            />
                        </>
                </View>
            }
        </View>
    )
}

export default CoinsScreen
