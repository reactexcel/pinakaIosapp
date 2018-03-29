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

    numberText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    numberContainer: {
        height: 57,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    cardIcon: {
        width: 32,
        height: 22,
        marginRight: 16
    },

    cardNumberText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    expiredDateText: {
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    expiredDateContainer: {
        height: 57,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        justifyContent: 'center'
    },

    expiredDateText1: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    footer: {
        height: 89,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 32,
        borderTopWidth: 0
    },

    deleteBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    deleteBtnText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    editBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor: 'rgb(230,54,166)',
        borderWidth: 1,
        borderColor: 'rgb(230,54,166)',
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    editBtnText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff'
    }
}