import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0
    },

    headerTitle: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold'
    },

    editBtnText: {
        marginRight: 10,
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular'
    },

    content: {
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingLeft: 20,
        paddingRight: 20
    },

    image: {
        width: 88,
        height: 88,
        borderRadius: 44
    },

    basicText: {
        fontSize: 22,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000',
        marginTop: 12
    },

    locationText: {
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230, 54,166)'
    },

    interestText: {
        marginTop: 32,
        color: '#000',
        fontFamily: 'SanFranciscoText-Bold',
        fontSize: 17,
        textAlign: 'left'
    },

    interestText1: {
        marginTop: 12,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 17,
        textAlign: 'left',
        marginBottom: 24
    },

    divider: {
        height: 1,
        backgroundColor: 'rgb(221,221,225)'
    },

    verifyText: {
        marginTop: 24,
        color: '#000',
        fontFamily: 'SanFranciscoText-Bold',
        fontSize: 17,
        textAlign: 'left'
    },

    verifyText1: {
        marginTop: 12,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 17,
        textAlign: 'left',
        marginBottom: 24
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        height: 57,
        paddingLeft: 0
    },

    listItemText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000',
        marginLeft: 0
    },

    listItemIcon: {
        fontSize: 25
    }
}