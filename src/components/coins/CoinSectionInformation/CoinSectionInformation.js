import React from 'react'
import Loader from '../../Global/Loader'

import { View, Text, SectionList, Image } from 'react-native'

// Format Numbers
import { formatNumbers } from '../../../utils/formatNumbers'

// Styles
import { styles } from './styles'

// Arrows Icons
import ArrowUp from '../../../assets/arrow-up.png'
import ArrowDown from '../../../assets/arrow-down.png'

const CoinSectionInformation = ({ value, data }) => {
    const getSections = () => {
        const section = [
            {
                title: "Rank",
                data: [data.rank]
            },
            {
                title: "Price USD",
                data: [data.price]
            },
            {
                title: "Market cap",
                data: [data.market]
            },
            {
                title: "Volume 24 hours",
                data: [data.volume24]
            },
            {
                title: "Total supply",
                data: [data.t_supply]
            },
            {
                title: "Max supply",
                data: [data.m_supply]
            }
        ]   
        return section
    }

    return (
        <View style={styles.container}>
        {
            value === undefined
            ? <Loader />
            : <>
                <View style={styles.informationBottom}>
                    <View style={styles.informationBottomBox}>
                        <Text style={styles.informationBottomDate}>1 hour</Text>
                        <Text style={
                            [styles.informationBottomText, value.percent_change_1h > 0 
                            ? styles.informationBottomUp 
                            : styles.informationBottomDown]
                        }>
                            {`${value.percent_change_1h}%`}
                            <Image style={styles.informationBottomImg} source={value.percent_change_1h > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                    <View style={styles.informationBottomDivider}></View>
                    <View style={styles.informationBottomBox}>
                        <Text style={styles.informationBottomDate}>24 hours</Text>
                        <Text style={
                            [styles.informationBottomText, value.percent_change_24h > 0 
                            ? styles.informationBottomUp 
                            : styles.informationBottomDown]
                        }>
                            {`${value.percent_change_24h}%`}
                            <Image style={styles.informationBottomImg} source={value.percent_change_24h > 0 ? ArrowUp : ArrowDown} />
                        </Text>
                    </View>
                    <View style={styles.informationBottomDivider}></View>
                    <View style={styles.informationBottomBox}>
                        <Text style={styles.informationBottomDate}>7 days</Text>
                        <Text style={
                            [styles.informationBottomText, value.percent_change_7d > 0 
                            ? styles.informationBottomUp 
                            : styles.informationBottomDown]
                        }>
                            {`${value.percent_change_7d}%`}
                            <Image style={styles.informationBottomImg} source={value.percent_change_7d > 0 ? ArrowUp : ArrowDown} />
                        </Text>
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
            </>
        }
        </View>
    )
}

export default CoinSectionInformation
