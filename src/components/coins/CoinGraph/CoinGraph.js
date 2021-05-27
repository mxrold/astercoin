import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from 'victory-native'

import { View, Text, Pressable } from 'react-native'

import { styles } from './styles'

import { Colors } from '../../../assets/GlobalStyles/Colors'

const date = (value) => {
    const time = new Date(value)
    const day = time.getUTCDate() 
    const month = time.getUTCMonth() + 1
    return `${day}/${month}`
}

const formatNumbers = n => {
    // if (n < 1e3) return n
    // if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) 
    // if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) 
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) 
    else if (n >= 1e12) return +(n / 1e12).toFixed(1)
    else { return n }
}

const CoinGraph = ({ chart }) => {
    const [ prices, setPrices ] = useState([
        { x: date(chart.prices[0][0]), y: formatNumbers(chart.prices[0][1]) },
        { x: date(chart.prices[1][0]), y: formatNumbers(chart.prices[1][1]) },
        { x: date(chart.prices[2][0]), y: formatNumbers(chart.prices[2][1]) },
        { x: date(chart.prices[3][0]), y: formatNumbers(chart.prices[3][1]) },
        { x: date(chart.prices[4][0]), y: formatNumbers(chart.prices[4][1]) },
        { x: date(chart.prices[5][0]), y: formatNumbers(chart.prices[5][1]) },
        { x: date(chart.prices[6][0]), y: formatNumbers(chart.prices[6][1]) },
    ])

    const dataChart = (value) => {
        return setPrices([
            { x: date(value[0][0]), y: formatNumbers(value[0][1]) },
            { x: date(value[1][0]), y: formatNumbers(value[1][1]) },
            { x: date(value[2][0]), y: formatNumbers(value[2][1]) },
            { x: date(value[3][0]), y: formatNumbers(value[3][1]) },
            { x: date(value[4][0]), y: formatNumbers(value[4][1]) },
            { x: date(value[5][0]), y: formatNumbers(value[5][1]) },
            { x: date(value[6][0]), y: formatNumbers(value[6][1]) },
        ])
    }

    const handleChartPrice = () => {
        dataChart(chart.prices)
    }

    const handleChartMarket = () => {
        dataChart(chart.market_caps)
    }

    const handleChartVolume = () => {
        dataChart(chart.total_volumes)
    }

    return (
        <>  
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.containerTitleText}>Chart</Text>
            </View>
            <View style={styles.containerCategories}>
                <Pressable style={styles.containerCategoriesBox} onPress={handleChartPrice}>
                    <Text style={styles.containerCategoriesTitle}>
                        Price
                    </Text>
                </Pressable>
                <View style={styles.separator}></View>
                <Pressable style={styles.containerCategoriesBox} onPress={handleChartMarket}>
                    <Text style={styles.containerCategoriesTitle}>
                        Market Cap
                    </Text>
                </Pressable>
                 <View style={styles.separator}></View>
                <Pressable style={styles.containerCategoriesBox} onPress={handleChartVolume}>
                    <Text style={styles.containerCategoriesTitle}>
                        Volume
                    </Text>
                </Pressable>
            </View>
        </View>
            <VictoryChart
                alignment="middle"
                theme={VictoryTheme.material}
                animate={{
                    duration: 2000,
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
            <View>
                <Text></Text>
            </View>
        </>
    )
} 

export default CoinGraph