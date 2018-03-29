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
        marginTop: 166,
        backgroundColor: '#fff',
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },

    nameText: {
        fontSize: 28,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    locationText: {
        marginTop: 8,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(155,155,168)'
    },

    pinIcon: {
        fontSize: 20,
        color: 'rgb(155,155,168)'
    },

    dateText: {
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 17,
        marginTop: 16
    },

    timeText: {
        fontFamily: 'SanFranciscoText-Regular',
        fontSize:  17,
        marginTop: 6,
        color: 'rgb(230,54,166)',
        marginBottom: 24
    },

    divider: {
        height: 1,
        backgroundColor: 'rgb(221,221,225)'
    },

    qrText: {
        marginTop: 24,
        fontFamily: 'SanFranciscoText-Bold',
        fontSize: 17,
        color: '#000',
        marginBottom: 16
    },

    qrContainer: {
        width: 288,
        borderRadius: 19,
        borderWidth: 2,
        borderColor: 'rgb(221,221,225)',
        padding: 28
    },

    qrCodeText: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'SanFranciscoText-Medium',
        color: '#000',
        textAlign: 'center'
    },

    qrWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 15
    },

    priceText: {
        fontSize: 22,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    paidMark: {
        width: 94,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'rgb(63,111,246)',
        flexDirection: 'row'
    },

    checkIcon: {
        color: '#fff'
    },

    paidText: {
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 17,
        color: '#fff'
    },

    descText: {
        fontSize: 17,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular',
        marginBottom: 24
    },

    moreBtn: {
        fontSize: 17,
        color: 'rgb(253,152,71)',
        fontFamily: 'SanFranciscoText-Regular'
    },

    cancelBtn: {
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 27,
        marginRight: 27,
        height: 57,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    cancelBtnText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    }
}