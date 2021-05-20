import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen'
import CoinsDetailScreen from '../../coins/CoinsDetailScreen/CoinsDetailScreen'

import { Colors } from '../../../assets/GlobalStyles/Colors'

const Stack = createStackNavigator()

const FavoritesStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Colors.dark1,
                shadowColor: 'transparent',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: Colors.light
        }}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreen}/>
            <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
        </Stack.Navigator>
    )
}

export default FavoritesStack
