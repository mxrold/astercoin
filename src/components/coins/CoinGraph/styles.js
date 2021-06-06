import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles =  StyleSheet.create({
    chart: {
        flex: 1,
        paddingVertical: 18,
        backgroundColor: Colors.dark2,
    },
    chartError: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    chartErrorImage: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    chartErrorText: {
        fontSize: 18,
        color: Colors.textLight
    },
    container: {
        flexDirection: 'column',
        marginBottom: 20,
        paddingHorizontal: 26,
    },
    containerCategories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.dark4,
        borderRadius: 7
    },
    containerCategoriesBtn: {
        width: '33%',
        padding: 12
    },
    containerCategoriesBtnText: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.textMedium,
        textAlign: 'center'
    },
    separator: {
        width: 2,
        height: '70%',
        backgroundColor: Colors.dark3,
    }, 
    containerFilter: {
        marginTop: 9,
        marginHorizontal: -26,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark4,
        borderTopWidth: 1,
        borderTopColor: Colors.dark4,
    },
    containerFilterBtn: {
        marginVertical: 10,
        marginHorizontal: 5,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: Colors.dark3,
        borderWidth: 2,
        borderColor: Colors.dark4,
        borderRadius: 50,
        
    },
    containerFilterText: {
        fontSize: 14,
        color: 'white',
       
    },
    anyChartContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    anyChartContainerText: {
        fontSize: 16,
        color: Colors.textLight,
    },
    loaderChart: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 80
    },
    loaderChartText: {
        marginTop: 20,
        fontSize: 18,
        color: Colors.textLight
    },
    textData: {
        marginRight: 26,
        marginBottom: -10
    },
    textDataFilter: {
        fontSize: 14,
        color: Colors.textDark,
        textAlign: 'right'
    }
})