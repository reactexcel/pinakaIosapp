import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main,
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    IconContainer: {
        flex: 0.1
    },

    headerTitle: {
        color: '#fff',
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold'
    },

    backBtnIcon: {
        width: 25,
        height: 25
    },

    content: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 24,
        backgroundColor: '#fff'
    },

    paymentText: {
        marginTop: 0,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    listItem: {
        marginLeft: 0,
        height: 57,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemIcon: {
        color: 'rgb(155, 155, 168)'
    },

    paymentIcon: {
        width: 32,
        height: 22,
        marginRight: 16
    },

    paymentListItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    checkIcon: {
        color: 'rgb(63,111,246)',
        fontSize: 35
    },

    addPaymentIcon: {
        color: 'rgb(230,54,166)',
        fontSize: 25
    },

    addPaymentText: {
        color: 'rgb(230,54,166)',
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular'
    }
}