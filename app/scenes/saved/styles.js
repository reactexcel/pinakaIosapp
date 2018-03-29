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

    content: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 4
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 0,
        marginTop: 20,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0
    },

    itemImage: {
        width: (width - 40),
        height: 200,
        position: 'relative'
    },

    itemPriceContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    itemPriceText1: {
        fontFamily: 'SanFranciscoText-Bold',
        fontSize: 22,
        color: '#000'
    },

    itemDiscount: {
        fontSize: 18,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(155,155,168)',
        textDecorationLine: 'line-through'
    },

    itemEstimatedTime: {
        marginTop: 8,
        marginLeft: 0,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(230,54,166)'
    },

    disccountContainer: {
        position: 'absolute',
        top: 0,
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
        top: 16,
        right: 16,
        width: 25,
        height: 25,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingRight: 0
    },

    saveBtnIcon: {
        width: 25,
        height: 25
    }
}