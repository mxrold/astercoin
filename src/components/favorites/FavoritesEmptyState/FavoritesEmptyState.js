import React from 'react'
import { View, Text, Image } from 'react-native'

// Styles
import { styles } from './styles'

// Image
import FavImage from '../../../assets/no-favorites-image.png'

const FavoritesEmptyState = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={FavImage} />
            <Text style={styles.text}>You don't have any favorites yet</Text>
        </View>
    )
}

export default FavoritesEmptyState
