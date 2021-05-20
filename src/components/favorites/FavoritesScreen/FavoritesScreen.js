import React, { useState, useEffect } from 'react'
import Storage from '../../../utils/Storage'
import FavoritesEmptyState from '../FavoritesEmptyState/FavoritesEmptyState'
import CoinItem from '../../coins/CoinItem/CoinItem'

import { View, FlatList } from 'react-native'

// Styles
import { styles } from './styles'

const FavoritesScreen = ({ navigation }) => {
    const [ favorites, setFavorites ] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFavorites()
        })

        return unsubscribe
    }, [navigation])

    const getFavorites = async () => {
        try {
            const allKeys = await Storage.instance.getAllKeys()

            const keys = allKeys.filter((key) => key.includes('favorite-'))

            const favs = await Storage.instance.multiGet(keys)

            const favorites = favs.map((fav) => JSON.parse(fav[1]))

            setFavorites(favorites)
        } catch(error) {
            console.log('Favorites: getFavorites error', error)
        }
    }

    const onHandlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }

    return (
        <View style={styles.container}>
            {
                favorites.length == 0 
                ? <FavoritesEmptyState />
                : <FlatList 
                    data={favorites}
                    renderItem={({ item }) => (
                        <CoinItem item={item} onPress={() => onHandlePress(item)} />
                    )}
                /> 
            }
        </View>
    )
}

export default FavoritesScreen
