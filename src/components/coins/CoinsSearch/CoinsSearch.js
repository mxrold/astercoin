import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

// Styles
import { styles } from './styles'

const CoinsSearch = ({ onChange }) => {
    const [ query, setQuery ] = useState('')

    const onHandleText = (query) => {
        setQuery(query)

        if(onChange) {
            onChange(query)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                onChangeText={onHandleText}
                value={query}
                placeholder="Search coin"
                placeholderTextColor="#aa96da"
                inlineImageLeft="search"
                inlineImagePadding={10}
            />
        </View>
    )
}

export default CoinsSearch
