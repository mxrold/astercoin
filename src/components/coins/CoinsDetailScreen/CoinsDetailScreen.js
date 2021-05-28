import React, { useState, useEffect, useRef } from 'react'
import useGetData from '../../../hooks/useGetData'
import CoinsMarkets from '../CoinsMarkets/CoinsMarkets'
import CoinGraph from '../CoinGraph/CoinGraph'
import CoinSectionInformation from '../CoinSectionInformation/CoinSectionInformation'
import Loader from '../../Global/Loader'
import Storage from '../../../utils/Storage'

import { View, Text, Image, FlatList, Pressable, Alert, Share, ScrollView } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'
import LottieView from 'lottie-react-native'

// Image
import { useGetIcon } from '../../../hooks/useGetIcon'

// Arrows
import ArrowUp from '../../../assets/arrow-up.png'
import ArrowDown from '../../../assets/arrow-down.png'
import ShareCoin from '../../../assets/share.png'
import HeartAnimate from '../../../assets/heart_json.json'


const CoinsDetailScreen = ({ route, navigation }) => {
    const [ value, setValue ] = useState({})
    const [ markets, setMarkets ] = useState()
    const [ isFavorite, setIsFavorite ] = useState(false)
    const [ chart, setChart ] = useState([])
    const [ loading, setLoading ] = useState(false)
    
    const data = {
        name: value.name,
        symbol: value.symbol,
        per_1h: `${value.percent_change_1h}%`,
        per_24h: `${value.percent_change_24h}%`,
        per_7d: `${value.percent_change_7d}%`,
        rank: `#${value.rank}`,
        price: `$${formatNumbers(value.price_usd)}`,
        market: `$${formatNumbers(value.market_cap_usd)}`,
        volume24: `$${formatNumbers(value.volume24)}`,
        t_supply: formatNumbers(value.tsupply),
        m_supply: value.msupply > 0 ? formatNumbers(value.msupply) : 'Unlimited supply'
    }

    useEffect(() => {
        setLoading(true)
        const { coin } = route.params
        navigation.setOptions({ title: coin.symbol })
        setValue(coin)
        setLoading(false)
        
        const fetchMarketsData = async (coinId) => {
            setLoading(true)
            const URL = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
            const response = await useGetData(URL)
            setMarkets(response)
            setLoading(false)
        }

        const fetchPricesChart = async (coinName) => {
            const URL = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=7&interval=daily`
            const response = await useGetData(URL)
            setChart(response)
        }

        getFavorite(coin)
        fetchMarketsData(coin.id)
        if(coin.nameid === 'binance-coin') {
            fetchPricesChart('binancecoin')
        } else {
            fetchPricesChart(coin.nameid)
        }
    }, [])
    
    const likeAnimation = useRef(null)
    const isFirstRun = useRef(true)

    useEffect(() => {
        if(isFirstRun.current) {
            if (isFavorite) {
                likeAnimation.current.play(66, 66)
            } else {
                likeAnimation.current.play(3, 4)
            }
            isFirstRun.current = false
        }
        else if(isFavorite) {
            likeAnimation.current.play(5, 66)
        } else {
            likeAnimation.current.play(0, 3)
        }

    }, [isFavorite])

    const toggleFavorite = () => {
        if(isFavorite) {
            removeFavorite()
        } else {
            addFavorite()
        }
    }

    const addFavorite = async () => {
        const coin = JSON.stringify(value)
        const key = `favorite-${value.id}`

        const stored = await Storage.instance.add(key, coin)

        if(stored) {
            setIsFavorite(true)
        }
    }

    const removeFavorite = () => {
        Alert.alert('Remove favorite', 'Are you sure?',[
            {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
            },
            {
                text: 'Remove',
                onPress: () => {
                    const key = `favorite-${value.id}`
                    const remove = Storage.instance.remove(key)
            
                    if(remove) {
                        setIsFavorite(false)
                    }
                },
                style: 'destructive'
            }
        ]) 
    }

    const getFavorite = async (coin) => {
        try {
            const key = `favorite-${coin.id}`
            const favStr = await Storage.instance.get(key)
            
            if(favStr != null) {
                setIsFavorite(true)
            }

        } catch(error) {
            console.log('getFavorite error', error)
        }
    }
    
    const onShare = async () => {
        try {
            const result = await Share.share({
           title: 'App link',
           message: `${data.name} - ${data.symbol}\n- Rank: ${data.rank}\n- Price: ${data.price}\n- Percentajes:\n\t> 1 hour: ${data.per_1h}\n\t> 24 hours: ${data.per_24h}\n\t> 7 days: ${data.per_7d}\n- Market cap: ${data.market}\n- Volume 24 hours: ${data.volume24}\n- Total supply: ${data.t_supply}\n- Max supply: ${data.m_supply}\n\nInformation by coinMarket`
        });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTopImg}>
                        <View style={[styles.headerTopImgContainerDiv, isFavorite ? styles.borderFav : styles.borderNoFav]}>
                            <Image 
                                style={styles.headerTopImgContainerDivImg}
                                resizeMode={'contain'}
                                source={{ uri: useGetIcon(value.nameid)}}
                            />
                        </View>
                        <Text style={styles.headerTopText}>{data.name}</Text>
                    </View>
                    <View style={styles.headerTopContainerIcons}>
                        <Pressable style={styles.headerTopShare} onPress={onShare}>
                            <Image 
                                style={styles.headerTopShareIcon} 
                                source={ ShareCoin }
                            />
                        </Pressable>
                        <Pressable style={styles.headerTopFavorite} onPress={toggleFavorite}>  
                            <LottieView 
                                ref={likeAnimation}
                                style={styles.headerTopFavoriteIcon} 
                                source={HeartAnimate} 
                                autoPlay={false}
                                loop={false}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.headerBottom}>
                    <View style={styles.headerBottomBox}>
                        <Text style={styles.headerBottomDate}>1 hour</Text>
                        <Text style={
                            [styles.headerBottomText, value.percent_change_1h > 0 
                            ? styles.headerBottomUp 
                            : styles.headerBottomDown]
                        }>
                            {`${value.percent_change_1h}%`}
                            <Image style={styles.headerBottomImg} source={value.percent_change_1h > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                    <View style={styles.headerBottomDivider}></View>
                    <View style={styles.headerBottomBox}>
                        <Text style={styles.headerBottomDate}>24 hours</Text>
                        <Text style={
                            [styles.headerBottomText, value.percent_change_24h > 0 
                            ? styles.headerBottomUp 
                            : styles.headerBottomDown]
                        }>
                            {`${value.percent_change_24h}%`}
                            <Image style={styles.headerBottomImg} source={value.percent_change_24h > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                    <View style={styles.headerBottomDivider}></View>
                    <View style={styles.headerBottomBox}>
                        <Text style={styles.headerBottomDate}>7 days</Text>
                        <Text style={
                            [styles.headerBottomText, value.percent_change_7d > 0 
                            ? styles.headerBottomUp 
                            : styles.headerBottomDown]
                        }>
                            {`${value.percent_change_7d}%`}
                            <Image style={styles.headerBottomImg} source={value.percent_change_7d > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                </View>
            </View>

            <CoinSectionInformation data={data}/>
            
            {
                Object.keys(chart).length === 0 ? <Loader /> : <CoinGraph chart={chart} />
            }            
           
            { 
                loading === true 
                ? <Loader /> 
                : <View style={styles.flatList}>
                    <Text style={styles.flatListTitle}>Markets</Text>
                    <FlatList
                        data={markets}
                        keyExtractor={(item) => `${item.name}-${item.base}-${item.quote}`}
                        renderItem={({ item }) => <CoinsMarkets item={item} />}
                        horizontal={true}
                    />
                  </View>
            }
        </View>
        </ScrollView>

    )
}

export default CoinsDetailScreen
