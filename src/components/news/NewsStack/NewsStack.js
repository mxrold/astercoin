import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewsScreen from '../NewsScreen/NewsScreen'
import NewsDetailScreen from '../NewsDetailScreen/NewsDetailScreen'

import { Colors } from '../../../assets/GlobalStyles/Colors'
import LogoTitle from '../../Global/LogoTitle'

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
            headerTintColor: Colors.textLight
        }}
        >
            <Stack.Screen 
                name="News" 
                component={NewsScreen}
                options={{ headerTitle: props => <LogoTitle {...props} /> }} 
            />
            <Stack.Screen 
                name="NewsDetail" 
                component={NewsDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default NewsStack