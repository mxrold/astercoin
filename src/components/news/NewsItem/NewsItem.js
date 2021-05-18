import React from 'react'
import { View , Text, Image, Pressable } from 'react-native'

import { styles } from './styles'

const NewsItem = ({item, onPress}) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.containerImage}>
                <Image 
                    style={styles.containerImageImg} 
                    source={{ uri: item.imgURL }} 
                />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.containerInfoSource}>{item.source}</Text>
                <Text style={styles.containerInfoText}>{item.title}</Text>
            </View>
        </Pressable>
    )
}

export default NewsItem
