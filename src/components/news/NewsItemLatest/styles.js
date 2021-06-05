import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 15
    },
    containerImage: {
        width: '40%',
    },
    containerImageImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7
    },
    containerInfo: {
        width: '60%',
        padding: 12,
        backgroundColor: Colors.dark3,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7
    },
    containerInfoSource: {
        marginBottom: 6,
        fontSize: 16,
        fontWeight: '400',
        color: Colors.blue4,
    },
    containerInfoText: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.blue4,
    }
})