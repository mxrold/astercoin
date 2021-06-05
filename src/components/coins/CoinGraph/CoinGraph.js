import React, { useState, useEffect } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory-native'
import Loader from '../../Global/Loader'
import useGetData from '../../../hooks/useGetData'

import { View, Text, ScrollView, FlatList, TouchableHighlight, Image, Pressable } from 'react-native'

import { styles } from './styles'

import { Colors } from '../../../assets/GlobalStyles/Colors'

import NoChart from '../../../assets/no-chart.png'

const date = (value) => {
    const time = new Date(value)
    const day = time.getUTCDate() 
    const month = time.getUTCMonth() + 1
    return `${day}/${month}`
}

const formatNumbers = n => {
    // if (n < 1e3) return n
    // if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) 
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) 
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) 
    else if (n >= 1e12) return +(n / 1e12).toFixed(1)
    else { return n }
}


const CoinGraph = ({ nameId }) => {
    const [ prices, setPrices ] = useState([])
    const [ chart, setChart ] = useState([])
    const [ textData, setTextData ] = useState('Prices')
    const [ textDataDays, setTextDataDays ] = useState('7 days')
    const [ category, setCategory ] = useState(1)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        if(nameId === 'binance-coin') {
            fetchPricesChart('binancecoin', 7)         
        } else {
            fetchPricesChart(nameId, 7)
        }
    }, [])

    const dataChart = (value) => {
        let data = []

        if(chart === undefined) {
            setChart(null)
        } else {
            for(let i = 0; i < chart.prices.length; i++) {
                data.push({ x: date(value[i][0]), y: formatNumbers(value[i][1]) })
            }
        }

        return setPrices(data)
    }    

    const fetchPricesChart = async (coinName, period) => {
        setLoading(true)
        const URL = `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${period}&interval=daily`
        const response = await useGetData(URL)
        setChart(response)
        setLoading(false)
    }

    const handleChartCategory = (func, title, num) => {
        dataChart(func)
        setTextData(title)
        setCategory(num)
    }

    const handleDaysFilter = async (numDays, days) => {
        await fetchPricesChart(nameId, numDays)
        setTextDataDays(days)

        if(category === 1) {
            dataChart(chart.prices)
        } 
        if(category === 2) {
            dataChart(chart.market_caps)
        } 
        if(category === 3) {
            dataChart(chart.total_volumes)
        }

    }

    const dataFilter = [
        {
            days: '3 days',
            num_days: 3 
        },
        {
            days: '7 days',
            num_days: 7
        },
        {
            days: '14 days',
            num_days: 14
        },
        {
            days: '21 days',
            num_days: 21,
        },
        {
            days: '30 days',
            num_days: 30 
        },
    ]

    const categoriesFilter = {
        prices: {
            title: 'Price',
            func: chart.prices, 
            num: 1
        },
        market_cap: {
            title: 'Market Cap',
            func: chart.market_caps,
            num: 2
        },
        total_volumes: {
            title: 'Volume',
            func: chart.total_volumes,
            num: 3
        }
    }

    return (
        <View style={styles.chart}>
        {
            chart.error 
            ? <View style={styles.chartError}>
                <Image style={styles.chartErrorImage} source={NoChart}/>
                <Text style={styles.chartErrorText}>Oops... The chart could not be loaded</Text>
              </View>
            : Object.keys(chart).length === 0
            ? <Loader /> 
            : <>
                <View style={styles.container}>
                    <View style={styles.containerCategories}>
                        <TouchableHighlight
                            activeOpacity={0.3}
                            underlayColor="#867ae9"
                            style={styles.containerCategoriesBtn} 
                            onPress={() => handleChartCategory(categoriesFilter.prices.func, categoriesFilter.prices.title, categoriesFilter.prices.num)}
                        >
                            <Text style={styles.containerCategoriesBtnText}>Price</Text>
                        </TouchableHighlight>
                        <View style={styles.separator}></View>
                        <TouchableHighlight
                            activeOpacity={0.3}
                            underlayColor="#867ae9"
                            style={styles.containerCategoriesBtn} 
                            onPress={() => handleChartCategory(categoriesFilter.market_cap.func, categoriesFilter.market_cap.title, categoriesFilter.market_cap.num)}
                        >
                            <Text style={styles.containerCategoriesBtnText}>Market Cap</Text>

                        </TouchableHighlight>
                        <View style={styles.separator}></View>
                        <TouchableHighlight
                            activeOpacity={0.3}
                            underlayColor="#867ae9"
                            style={styles.containerCategoriesBtn} 
                            onPress={() => handleChartCategory(categoriesFilter.total_volumes.func, categoriesFilter.total_volumes.title, categoriesFilter.total_volumes.num)}
                        >
                            <Text style={styles.containerCategoriesBtnText}>Volume</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.containerFilter}>
                        <FlatList 
                            data={dataFilter}
                            keyExtractor={(item) => `pediod-${item.days}`}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <TouchableHighlight 
                                    activeOpacity={0.3}
                                    underlayColor="#1b1d39"
                                    style={styles.containerFilterBtn} 
                                    onPress={() => handleDaysFilter(item.num_days, item.days)}
                                >
                                    <Text style={styles.containerFilterText}>
                                        {item.days}
                                    </Text>
                                </TouchableHighlight>
                            )}
                        />
                    </View>
                </View>
                {
                    prices.length === 0 
                    ?   <View style={styles.anyChartContainer}>
                            <Text style={styles.anyChartContainerText}>Select a chart by categories or days</Text>
                        </View> 
                    :    loading === true
                        ?   <View style={styles.loaderChart}>
                                <Loader />
                                <Text style={styles.loaderChartText}>...Loading chart</Text>
                            </View> 
                        : <ScrollView>
                            <View style={styles.textData}>
                                <Text style={styles.textDataFilter}>{`${textData} - ${textDataDays}`}</Text>
                            </View>
                            <VictoryChart
                                alignment="middle"
                                theme={VictoryTheme.material}
                                animate={{
                                    duration: 1000,
                                    onLoad: { duration: 1000 }
                                    }}
                                    padding={{top: 20, right: 25, bottom: 60, left: 60}}
                                >
                                <VictoryAxis
                                    domainPadding={{x: [5, 10]}}
                                    style={{
                                        axis: {
                                            stroke: '#bbbfca'  
                                        },
                                        tickLabels: {
                                            fill: '#bbbfca'  
                                        }, 
                                        grid: {
                                            stroke: '#2c2f5b',  
                                            strokeDasharray: '0',
                                            strokeWidth: .5
                                        },
                                        tickLabels: {angle :45}
                                    }}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={(x) => x}
                                    style={{
                                        axis: {
                                            stroke: '#bbbfca'  
                                        },
                                        tickLabels: {
                                            fill: '#bbbfca'
                                        }, 
                                        grid: {
                                            stroke: '#2c2f5b',  
                                            strokeDasharray: '0',
                                            strokeWidth: .5
                                        },
                                        
                                    }}
                                />
                                <VictoryLine
                                    style={{
                                        data: {  
                                            stroke: Colors.purple, 
                                            strokeWidth: 2,
                                        }
                                    }}
                                    data={prices}
                                />
                            </VictoryChart>
                        </ScrollView>
                    }
                </>
            }
        </View>
    )
} 

export default CoinGraph