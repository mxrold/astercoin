import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 280,
        marginHorizontal: 10,
        marginBottom: 15,
    },
    containerImage: {
        height: '70%'
    },
    containerImageImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 3.5
    },
    containerInfo: {
        flexDirection: 'row',
        height: '30%',
        padding: 12
    },
    containerInfoIcon: {
        width: 28,
        height: 28,
        marginRight: 9,
        borderRadius: 50,
    },
    containerInfoTitle: {
        maxWidth: 248,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.textLight,
    }
})