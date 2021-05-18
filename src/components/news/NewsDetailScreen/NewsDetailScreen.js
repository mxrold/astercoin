import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, Linking } from 'react-native'

import { styles } from './styles'

// Image
import Link from '../../../assets/link.png'

const NewsDetailScreen = ({ route, navigation }) => {
    const [ news, setNews ] = useState({})

    useEffect(() => {
        const { data } = route.params
        navigation.setOptions({title: `News - ${data.source}`})
        setNews(data)
    }, [])

    const date = (value) => {
        const time = new Date(value)
        return time.toLocaleDateString(time)
    }

    console.log(news.imgURL)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImage}>
                <Image 
                    style={styles.containerImageImg}
                    source={ news.imgURL === '' ? '' : {uri: news.imgURL} }
                />
                <View style={styles.containerImageDate}>
                    <Text style={styles.containerImageDateText}>{date(news.feedDate)}</Text>
                </View>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.containerInfoTitle}>
                    <Text style={styles.containerInfoTitleText}>{news.title}</Text>
                </View>
                <Text style={styles.containerInfoDescription}>{news.description}</Text>
                <View style={styles.containerInfoLink}>
                    <Image style={styles.containerInfoLinkImage} source={Link} />
                    <Text style={styles.containerInfoLinkText} onPress={() => Linking.openURL(news.link)}>
                        Open the news link here
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewsDetailScreen
