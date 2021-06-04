import React from 'react'
import RNRestart from 'react-native-restart'

import { View, Text, StyleSheet, Button, Image } from 'react-native'

import { Colors } from '../../assets/GlobalStyles/Colors'

import ImageConnec from '../../assets/no-connection.png'

const Connectivity = () => {

    const handleReloadApp = () => {
        RNRestart.Restart();
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={ImageConnec} />
                <Text style={styles.title}>Oops! Something went wrong</Text>
                <Text style={styles.text}>The content could not be loaded. Check your internet connection and try reloading the app</Text>
                <Button 
                onPress={handleReloadApp} 
                title="Try to connect" 
                color={Colors.purple}
                accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: Colors.dark2
    },
    image: {
        alignSelf: 'center',
        width: 190,
        height: 190,
        resizeMode: 'contain'
    },
    title: {
        marginVertical: 12,
        fontSize: 20,
        fontWeight: '700',
        color: Colors.blue4
    },
    text: {
        marginBottom: 12,
        fontSize: 16,
        color: Colors.blue4
    }
})

export default Connectivity
