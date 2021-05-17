import React, { useState, useEffect } from 'react'
import useGetData from '../../../hooks/useGetData'
import CoinsMarkets from '../CoinsMarkets/CoinsMarkets'
import Loader from '../../Global/Loader'

import { View, Text, Image, SectionList, FlatList } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

// Image
import { useGetIcon } from '../../../hooks/useGetIcon'

// Arrows
import ArrowUp from '../../../assets/arrow-up.png'
import ArrowDown from '../../../assets/arrow-down.png'

const CoinsDetailScreen = ({ route, navigation }) => {
    const [ value, setValue ] = useState({})
    const [ markets, setMarkets ] = useState()
    
    useEffect(() => {
        const { coin } = route.params
        navigation.setOptions({ title: coin.symbol })
        setValue(coin)

        fetchMarketsData(coin.id)
    }, [])

    const fetchMarketsData = async (coinId) => {
        const URL = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
        const response = await useGetData(URL)
        setMarkets(response)
    }
    
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
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerTopImgContainer}>
                        <Image 
                            style={styles.headerTopImg}
                            resizeMode={'contain'}
                            source={{ uri: useGetIcon(value.nameid)}}/>
                    </View>
                    <Text style={styles.headerTopText}>{value.name}</Text>
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
