import { useState, useEffect } from 'react'
import Http from '../utils/Http'

const useGetData = (URL) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const callApi = async () => {
            const coins = await Http.instance.get(URL)
            setData(coins.data)
        }

        callApi()
    }, [])

    return data 
}

export default useGetData
