import React from 'react'
import { View , Text, Image, Pressable } from 'react-native'
import Loader from '../../Global/Loader'

import { styles } from './styles'

const NewsItemLatest = ({item, onPress}) => {
    console.log('desde noticias', item)
    return (
        <>
            {
                item === 0
                ? <Loader />
                : <Pressable onPress={onPress} style={styles.container}>
                    <Image 
                        style={styles.containerImageImg} 
                        source={{ uri: item.imgURL.replaceAll('amp;', '') }} 
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
