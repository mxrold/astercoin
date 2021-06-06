import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from '../FavoritesScreen/FavoritesScreen'
import CoinsDetailScreen from '../../coins/CoinsDetailScreen/CoinsDetailScreen'

import { Colors } from '../../../assets/GlobalStyles/Colors'
import LogoTitle from '../../Global/LogoTitle'

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
            headerTintColor: Colors.textLight
        }}
        >
            <Stack.Screen 
                name="Favorites" 
                component={FavoritesScreen}
                options={{ headerTitle: props => <LogoTitle {...props} /> }} 
            />
            <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
        </Stack.Navigator>
    )
}

export default FavoritesStack
