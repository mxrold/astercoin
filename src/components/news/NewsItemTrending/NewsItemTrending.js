import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import { styles } from './styles'

const NewsItemTrending = ({ item, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.containerImage}>
                <Image style={styles.containerImageImg} source={{ uri: item.imgURL.replaceAll('amp;', '') }} />
            </View>
            <View style={styles.containerInfo}>
                <Image style={styles.containerInfoIcon} source={{ uri: item.icon }} />
                <Text style={styles.containerInfoTitle}>{item.title}</Text>
            </View>
        </Pressable>
    )
}

export default NewsItemTrending
