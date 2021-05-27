import React from 'react'

import { View, Text, SectionList } from 'react-native'

import { styles } from './styles'

const CoinSectionInformation = ({ data }) => {

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
    )
}

export default CoinSectionInformation
