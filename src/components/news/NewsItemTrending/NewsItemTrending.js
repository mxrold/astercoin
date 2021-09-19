import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import Loader from '../../Global/Loader'

import { styles } from './styles'

const NewsItemTrending = ({ item, onPress }) => {
    const replaceUrlImg = value => {
        return value.replaceAll('amp;', '')
    }

    return (
        <>
            {
                item === 0
                ? <Loader />
                : <Pressable style={styles.container} onPress={onPress}>
                    <View style={styles.containerImage}>
                        <Image style={styles.containerImageImg} source={{ uri: replaceUrlImg(item.imgURL) }} />
                    </View>
                    <View style={styles.containerInfo}>
                        <Image style={styles.containerInfoIcon} source={{ uri: item.icon }} />
                        <Text style={styles.containerInfoTitle}>{item.title}</Text>
                    </View>
                </Pressable>
            }
        </>
    )
}

export default NewsItemTrending
