import React from 'react'
import { View , Text, Image, Pressable } from 'react-native'

import { styles } from './styles'

const NewsItemLatest = ({item, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image 
                style={styles.containerImageImg} 
                source={{ uri: item.imgURL.replaceAll('amp;', '') }} 
            />
            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoSource}>{item.source}</Text>
                <Text style={styles.containerInfoText}>{item.title}</Text>
            </View>
        </Pressable>
    )
}

export default NewsItemLatest
