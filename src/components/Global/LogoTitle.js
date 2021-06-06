import React from 'react'
import { View, Image } from 'react-native'

import Logo from '../../assets/astercoin-logo.png'

const LogoTitle = () => {
    return (
        <View style={{alignSelf: 'center'}}>
            <Image style={{width: 128, height: 20.5 }} source={ Logo } />
        </View>
    )
}
export default LogoTitle
