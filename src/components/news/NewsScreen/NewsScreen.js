import React, { useState, useEffect, useCallback } from 'react'
import { View, ScrollView, Text, FlatList, RefreshControl } from 'react-native'

import NewsItem from '../NewsItem/NewsItem'

import useGetData from '../../../hooks/useGetData'

// Styles
import { styles } from './styles'
import Loader from '../../Global/Loader'

const wait = (timeout) => {
    return new Promise(resolve=> setTimeout(resolve, timeout)) 
}

const NewsScreen = ({ navigation }) => {
    const [ news, setNews ] = useState([])
    const [ refreshing, setRefreshing ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        getData()
        fetchData()
    }, [])

    const URL =  'https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20'
    const getData = async () => {
        setLoading(true)
        const response = await useGetData(URL)
        setNews(response.news)
        setLoading(false)
    }

    const fetchData = async () => {
        const response = await useGetData(URL)
        setNews(response.news)
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
                    <Text style={styles.title}>Latest news</Text>
                    <FlatList 
                        data={news}
                        renderItem={({ item }) => (
                            <NewsItem item={item} onPress={() => onHandlePress(item)}/>
                        )}
                    />
                </ScrollView>
            }
        </View>
    )
}

export default NewsScreen
