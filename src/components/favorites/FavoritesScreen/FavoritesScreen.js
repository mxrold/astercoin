import React from 'react'
import FavoritesEmptyState from '../FavoritesEmptyState/FavoritesEmptyState'

import { View } from 'react-native'

// Styles
import { styles } from './styles'

const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            <FavoritesEmptyState />
        </View>
    )
}

export default FavoritesScreen
