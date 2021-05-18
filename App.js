import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CoinsStack from './src/components/coins/CoinsStack/CoinsStack'
import FavoritesStack from './src/components/favorites/FavoritesStack/FavoritesStack'
import NewsStack from './src/components/news/NewsStack/NewsStack'

// Styles
import { Image } from 'react-native'
import { Colors } from './src/assets/GlobalStyles/Colors'

//Images
import Coins from './src/assets/coins.png'
import Favorites from './src/assets/favorites.png'
import News from './src/assets/news.png'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor : '#fefefe',
          activeBackgroundColor: Colors.dark1,
          inactiveBackgroundColor: Colors.dark1,
          activeTintColor: Colors.purple,
          inactiveTintColor: Colors.blue3,
          borderTopWidth: 0,
          elevation: 0
        }}
      >
        <Tabs.Screen 
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image 
                source={Coins} 
                style={{tintColor: color, width: size, height: size, resizeMode: 'cover'}}
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
              style={{tintColor: color, width: size, height: size, resizeMode: 'contain'}}
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
              style={{tintColor: color, width: size, height: size, resizeMode: 'contain'}}
            />
          )
        }}
        />
        
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default App
