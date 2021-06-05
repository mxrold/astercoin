import React, { useState, useEffect, useCallback } from 'react'
import { View, ScrollView, Text, FlatList, RefreshControl } from 'react-native'

import NewsItemLatest from '../NewsItemLatest/NewsItemLatest'
import NewsItemTrending from '../NewsItemTrending/NewsItemTrending'

import useGetData from '../../../hooks/useGetData'

// Styles
import { styles } from './styles'
import Loader from '../../Global/Loader'

const wait = (timeout) => {
    return new Promise(resolve=> setTimeout(resolve, timeout)) 
}

const NewsScreen = ({ navigation }) => {
    const [ newsLatest, setNewsLatest ] = useState([])
    const [ newsTrending, setNewsTrending ] = useState([])
    const [ refreshing, setRefreshing ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        getData()
        fetchData()
    }, [])

    const URL_LATEST =  'https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20'
    const URL_TRENDING =  'https://api.coinstats.app/public/v1/news/trending?skip=0&limit=10'

    const getData = async () => {
        setLoading(true)
        const responseLatest = await useGetData(URL_LATEST)
        const responseTrending = await useGetData(URL_TRENDING)
        setNewsLatest(responseLatest.news)
        setNewsTrending(responseTrending.news)
        setLoading(false)
    }

    const fetchData = async () => {
        const responseLatest = await useGetData(URL_LATEST)
        setNewsLatest(responseLatest.news)
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        fetchData()
        wait(1000).then(() => setRefreshing(false))
    })

    const onHandlePress = (data) => {
        navigation.navigate('NewsDetail', { data })
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

                    <Text style={styles.title}>Trending news</Text>
                    <FlatList 
                        data={newsTrending}
                        horizontal={true}
                        renderItem={({ item }) => (
                           <NewsItemTrending item={item} onPress={() => onHandlePress(item)}/>
                        )}
                    />
                    <Text style={styles.title}>Latest news</Text>
                    <FlatList 
                        data={newsLatest}
                        renderItem={({ item }) => (
                            <NewsItemLatest item={item} onPress={() => onHandlePress(item)}/>
                        )}
                    />
                </ScrollView>
            }
        </View>
    )
}

export default NewsScreen
