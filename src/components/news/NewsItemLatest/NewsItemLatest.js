import React from 'react'
import { View , Text, Image, Pressable } from 'react-native'
import Loader from '../../Global/Loader'

import { styles } from './styles'

const NewsItemLatest = ({item, onPress}) => {
    const replaceUrlImg = value => {
        return value.replaceAll('amp;', '')
    }

    return (
        <>
            {
                item === 0
                ? <Loader />
                : <Pressable onPress={onPress} style={styles.container}>
                    <Image 
                        style={styles.containerImageImg} 
                        source={{ uri: replaceUrlImg(item.imgURL) }} 
                    />
                    <View style={styles.containerInfo}>
                        <Text style={styles.containerInfoSource}>{item.source}</Text>
                        <Text style={styles.containerInfoText}>{item.title}</Text>
                    </View>
                </Pressable>

            }
        </>
    )
}

export default NewsItemLatest
