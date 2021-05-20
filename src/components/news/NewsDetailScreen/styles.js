import { StyleSheet } from 'react-native'
import { Colors } from '../../../assets/GlobalStyles/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark2
    },
    containerImage: {
        position: 'relative',
    },
    containerImageImg: {
        width: '100%',
        height: 180,
        borderBottomLeftRadius: 21,
        borderBottomRightRadius: 21
    },
    containerImageDate: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 26,
        marginBottom: 8
    },
    containerImageDateText: {
        padding: 3,
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: .5,
        backgroundColor: Colors.dark3,
        color: Colors.light,
        borderRadius: 3
    },
    containerInfo: {
        padding: 26
    },
    containerInfoTitle: {
        paddingLeft: 12,
        borderLeftWidth: 4,
        borderLeftColor: Colors.purple,
    },
    containerInfoTitleText: {
        fontSize: 22,
        fontWeight: '600',
        color: Colors.light,
    },
    containerInfoDescription: {
        marginTop: 13,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: .5,
        color: Colors.light,
    },
    containerInfoLink: {
        flexDirection: 'row',
        marginTop: 13
    },
    containerInfoLinkText: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.light,
        borderBottomWidth: 1,
        borderBottomColor: Colors.dark3,
    },
})