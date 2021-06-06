import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NetInfo from '@react-native-community/netinfo'

import Connectivity from './src/components/Global/Connectivity'

import CoinsStack from './src/components/coins/CoinsStack/CoinsStack'
import FavoritesStack from './src/components/favorites/FavoritesStack/FavoritesStack'
import NewsStack from './src/components/news/NewsStack/NewsStack'

import { StatusBar } from 'react-native'

// Styles
import { Image } from 'react-native'
import { Colors } from './src/assets/GlobalStyles/Colors'

//Images
import Coins from './src/assets/coins.png'
import Favorites from './src/assets/heart_fill.png'
import News from './src/assets/news.png'


const Tabs = createBottomTabNavigator()

const AppContent = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor : '#fefefe',
          activeBackgroundColor: Colors.dark1,
          inactiveBackgroundColor: Colors.dark1,
          activeTintColor: Colors.purple,
          inactiveTintColor: Colors.dark3,
          fontSize: 18,
          labelStyle: {
            fontSize: 12,
          },
          style: {
            borderTopColor: Colors.dark1,
          }
        }}
      >
        <Tabs.Screen 
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                source={Coins} 
                style={{tintColor: color, width: 18, height: 18}}
              />
            )
          }}
        />
        <Tabs.Screen 
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image 
              source={Favorites} 
              style={{tintColor: color, width: 18, height: 18}}
            />
          )
        }}
        />
        <Tabs.Screen 
        name="News"
        component={NewsStack}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image 
              source={News} 
              style={{tintColor: color, width: 18, height: 18}}
            />
          )
        }}
        />
        
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  const [ connected, isConnected ] = useState()

  useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
          isConnected(state.isConnected)
      })
      
      unsubscribe()
  }, [])  
  return(
    <>
        <StatusBar backgroundColor="#101021" animated={true} />
      {
        connected === false 
        ? <Connectivity />
        : <AppContent />
      }
    </>
  )
}

export default App
