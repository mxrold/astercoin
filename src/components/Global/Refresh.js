import React, { useState, useCallback } from 'react'
import { RefreshControl } from 'react-native'

const wait = (timeout) => {
    return new Promise(resolve=> setTimeout(resolve, timeout)) 
}

const Refresh = (fetchData) => {
    const [ refreshing, setRefreshing ] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        fetchData()
        wait(1000).then(() => setRefreshing(false))
    })

    return (
        <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#867ae9']}
            progressBackgroundColor={'#121329'}
            progressViewOffset={40}
        />
    )
}

export default Refresh