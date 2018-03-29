import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    backBtnIcon: {
        width: 25,
        height: 25
    },

    content: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 24
    },

    basicContainer: {
        paddingRight: 35
    },

    imageContainer: {
        width: 114
    },

    image: {
        width: 114,
        height: 114
    },

    nameText: {
        fontSize: 22,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    locationText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(155,155,168)',
        marginTop: 8
    },

    phoneText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230,54,166)',
        marginTop: 8
    },

    datetimeText: {
        marginTop: 21,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    dateText: {
        marginTop: 12,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    timeText: {
        marginTop: 6,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230,54,166)'
    },

    list: {
        marginTop: 24,
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    right: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    countTextContainer: {
        width: 32,
        height: 32,
        backgroundColor: 'rgb(63,111,246)',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },

    countText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff'
    },

    paymentText: {
        marginTop: 24,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    listItemIcon: {
        color: 'rgb(155, 155, 168)',
        marginLeft: 0,
        marginRight: 0
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
        fontSize: 35,
        lineHeight: 34
    },

    addPaymentIcon: {
        color: 'rgb(230,54,166)',
        fontSize: 25
    },

    addPaymentText: {
        color: 'rgb(230,54,166)',
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular'
    },

    footer: {
        height: 80,
        backgroundColor: '#fff',
        shadowOffset: {x: 0, y: -1},
        shadowColor: '#000',
        shadowOpacity: 0.14,
        shadowRadius: 4,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12
    },

    payBtn: {
        width: 156,
        height: 57,
        backgroundColor: 'rgb(230,54,166)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    payBtnText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Medium'
    },

    footerPriceText: {
        fontSize: 22,
        color: '#000',
        fontFamily: 'SanFranciscoText-Bold'
    },

    footerLineText: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular'
    }
}