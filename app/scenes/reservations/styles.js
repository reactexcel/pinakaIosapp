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
        paddingRight: 0,
        borderBottomWidth: 0
    },

    headerTitle: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold'
    },

    content: {
        marginTop:0,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },

    tabContainer: {
        height: 46,
        backgroundColor: Colors.main
    },

    tabItemBtn: {
        height: 46,
        borderRadius: 0
    },

    tabItemActiveBtn: {
        borderBottomWidth: 4,
        borderBottomColor: 'rgb(230,54,166)'
    },

    tabItemActiveBtnText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Medium'
    },

    tabItemBtnText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Medium',
        color: 'rgba(255,255,255,0.65)'
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemImage: {
        width: 64,
        height: 64
    },

    listItemTitleText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    listItemDateText: {
        marginTop: 8,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    listItemTimeText: {
        marginTop: 4,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230,54,166)'
    },

    listItemRightIcon: {
        fontSize: 30
    },

    listItemLocationText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(155,155,168)',
        marginTop: 8
    },

    listItemReceivedTimeText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000',
        marginTop: 8
    },

    listItemPriceText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Medium',
        color: 'rgb(221,20,149)'
    }
}
