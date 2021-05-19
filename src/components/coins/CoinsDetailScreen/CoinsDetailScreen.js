import React, { useState, useEffect } from 'react'
import useGetData from '../../../hooks/useGetData'
import CoinsMarkets from '../CoinsMarkets/CoinsMarkets'
import Loader from '../../Global/Loader'
import Storage from '../../../utils/Storage'

import { View, Text, Image, SectionList, FlatList, Pressable } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

// Image
import { useGetIcon } from '../../../hooks/useGetIcon'

// Arrows
import ArrowUp from '../../../assets/arrow-up.png'
import ArrowDown from '../../../assets/arrow-down.png'
import Heart from '../../../assets/heart_fill.png'
import HeartOutline from '../../../assets/heart_outline.png'


const CoinsDetailScreen = ({ route, navigation }) => {
    const [ value, setValue ] = useState({})
    const [ markets, setMarkets ] = useState()
    const [ isFavorite, setIsFavorite ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        const { coin } = route.params
        navigation.setOptions({ title: coin.symbol })
        setValue(coin)

        const fetchMarketsData = async (coinId) => {
            setLoading(true)
            const URL = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
            const response = await useGetData(URL)
            setMarkets(response)
            setLoading(false)
        }

        fetchMarketsData(coin.id)
    }, [])
    
    const getSections = () => {
        const section = [
            {
                title: "Rank",
                data: [`#${value.rank}`]
            },
            {
                title: "Price USD",
                data: [`$${formatNumbers(value.price_usd)}`]
            },
            {
                title: "Market cap",
                data: [`$${formatNumbers(value.market_cap_usd)}`]
            },
            {
                title: "Volume 24 hours",
                data: [`$${formatNumbers(value.volume24)}`]
            },
            {
                title: "Total supply",
                data: [formatNumbers(value.tsupply)]
            },
            {
                title: "Max supply",
                data: value.msupply > 0 ? [formatNumbers(value.msupply)] : ['Unlimited supply']
            }
        ]   
        return section
    }

    const toggleFavorite = () => {
        if(isFavorite) {
            removeFavorite()
        } else {
            addFavorite()
        }
    }

    const addFavorite = () => {
        const coin = JSON.stringify(value)
        const key = `favorite-${value.id}`

        const stored = Storage.instance.add(key, coin)

        if(stored) {
            setIsFavorite(true)
        }
    }

    const removeFavorite = () => {
        return setIsFavorite(false)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTopImg}>
                        <View style={styles.headerTopImgContainerDiv}>
                            <Image 
                                style={styles.headerTopImgContainerDivImg}
                                resizeMode={'contain'}
                                source={{ uri: useGetIcon(value.nameid)}}
                            />
                        </View>
                        <Text style={styles.headerTopText}>{value.name}</Text>
                    </View>
                    <Pressable style={styles.headerTopFavorite} onPress={toggleFavorite}>
                        <Image 
                            style={styles.headerTopFavoriteIcon} 
                            source={ isFavorite ? HeartOutline : Heart }
                        />
                    </Pressable>
                </View>
                <View style={styles.headerBottom}>
                    <View style={styles.headerBottomBox}>
                        <Text style={styles.headerBottomDate}>1 hour</Text>
                        <Text style={
                            [styles.headerBottomText, value.percent_change_1h > 0 
                            ? styles.headerBottomUp 
                            : styles.headerBottomDown]
                        }>
                            {value.percent_change_1h}
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
                            {value.percent_change_7d}
                            <Image style={styles.headerBottomImg} source={value.percent_change_7d > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <SectionList
                    style={styles.sectionContainer}
                    sections={getSections()}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => 
                        <View style={styles.sectionContainerText}>
                            <Text style={styles.sectionContainerTextText}>{item}</Text>
                        </View>
                    }
                    renderSectionHeader={({ section }) => 
                        <View style={styles.sectionContainerTitle}>
                            <Text style={styles.sectionContainerTitleText}>{section.title}</Text>
                        </View>
                    }
                />
            </View>
            { 
                loading &&  <Loader /> 
            }
            <View style={styles.flatList}>
                <Text style={styles.flatListTitle}>Markets</Text>
                <FlatList
                    data={markets}
                    keyExtractor={(item) => `${item.name}-${item.base}-${item.quote}`}
                    renderItem={({ item }) => <CoinsMarkets item={item} />}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default CoinsDetailScreen
