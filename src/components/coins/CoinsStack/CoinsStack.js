import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import CoinsScreen from '../CoinsScreen/CoinsScreen'
import CoinsDetailScreen from '../CoinsDetailScreen/CoinsDetailScreen'

// Colors
import { Colors } from '../../../assets/GlobalStyles/Colors'

const Stack = createStackNavigator()

const CoinsStack = () => { 
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
            <Stack.Screen name="Coins" component={CoinsScreen} />
            <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
        </Stack.Navigator>
    )
}

export default CoinsStack