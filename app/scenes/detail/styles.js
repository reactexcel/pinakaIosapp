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

    backBtnIcon: {
        width: 25,
        height: 25
    },

    image: {
        width: width,
        height: 230,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0
    },

    content: {
        backgroundColor: '#fff',
        marginTop: 166,
        paddingLeft: 0,
        paddingRight: 0
    },

    disccountContainer: {
        position: 'absolute',
        top: (230 - 56) / 2,
        left: 0,
        width: 70,
        height: 56,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    disccountPercent: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#fff'
    },

    disccountText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Medium',
        color: '#fff'
    },

    saveBtn: {
        position: 'absolute',
        right: 10,
        top: 208,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24,
        shadowRadius: 2
    },

    saveBtnIcon: {
        width: 25,
        height: 25
    },

    shareBtn: {
        position: 'absolute',
        right: 74,
        top: 208,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.24,
        shadowRadius: 2
    },

    shareBtnIcon: {
        width: 25,
        height: 25
    },

    title: {
        marginTop: 38,
        fontFamily: 'SanFranciscoText-Bold',
        fontSize: 28,
        color: '#000',
        marginLeft: 20,
        marginRight: 20
    },

    estimateTimeText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        marginLeft: 20,
        marginTop: 8,
        color: 'rgb(230,54,166)'
    },

    list: {
        marginTop: 24,
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    originPrice: {
        fontSize: 28,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(155,155,168)',
        textDecorationLine: 'line-through'
    },

    currentPrice: {
        fontSize: 28,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    aboutText: {
        marginTop: 6,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    aboutDescText: {
        marginTop: 12,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        lineHeight: 24,
        color: '#000',
        marginBottom: 6
    },

    moreBtn: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        lineHeight: 24,
        color: 'rgb(253,152,71)'
    },

    btnText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    locationText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230,54,166)'
    },

    pinIcon: {
        color: 'rgb(230,54,166)',
        fontSize: 20
    },

    mapview: {
        width: width,
        height: 300,
        marginBottom: 0
    },

    footer: {
        height: 80,
        backgroundColor: '#fff',
        paddingTop: 12,
        paddingBottom: 11,
        paddingLeft: 48,
        paddingRight: 48,
        shadowOffset: {x: 0, y: -1},
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4
    },

    reserveBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center',
        width: (width - 96)
    },

    reserveBtnText: {
        fontFamily: 'SanFranciscoText-Medium',
        fontSize: 20
    }
}
