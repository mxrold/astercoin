import React from 'react'

import { View, ActivityIndicator, StyleSheet } from 'react-native'

// Styles
import { Colors } from '../../assets/GlobalStyles/Colors'

const Loader = () => {
    return (
        <View style={styles.containerLoader}>
            <ActivityIndicator 
                color={Colors.purple}
                size={40}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default Loader
