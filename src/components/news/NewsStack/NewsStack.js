import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewsScreen from '../NewsScreen/NewsScreen'
import NewsDetailScreen from '../NewsDetailScreen/NewsDetailScreen'

import { Colors } from '../../../assets/GlobalStyles/Colors'

const Stack = createStackNavigator()

const NewsStack = () => {
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
            <Stack.Screen 
                name="News" 
                component={NewsScreen}
            />
            <Stack.Screen 
                name="NewsDetail" 
                component={NewsDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default NewsStack