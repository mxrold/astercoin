import React, { useState, useEffect } from 'react'
import { ScrollView, Text, FlatList } from 'react-native'

import NewsItem from '../NewsItem/NewsItem'

import useGetData from '../../../hooks/useGetData'

// Styles
import { styles } from './styles'
import Loader from '../../Global/Loader'

const NewsScreen = ({ navigation }) => {
    const [ news, setNews ] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const URL =  'https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20'
            const response = await useGetData(URL)
            setNews(response.news)
            setLoading(false)
        }

        fetchData()
    }, [])

    const onHandlePress = (data) => {
        navigation.navigate('NewsDetail', { data })
    }

    return (
        <ScrollView style={styles.container}>
            {
                loading && <Loader />
            }
            <Text style={styles.title}>Latest news</Text>
            <FlatList 
                data={news}
                renderItem={({ item }) => (
                    <NewsItem item={item} onPress={() => onHandlePress(item)}/>
                )}
            />
        </ScrollView>
    )
}

export default NewsScreen
