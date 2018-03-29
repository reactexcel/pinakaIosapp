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

    headerLeft: {
        flex: 0.1
    },

    headerRight: {
        flex: 0.1
    },

    backBtnIcon: {
        width: 25,
        height: 25
    },

    title: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#fff'
    },

    content: {
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingLeft: 20,
        paddingRight: 20
    },

    form: {
        
    },

    formItem: {
        marginLeft: 0,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        position: 'relative'
    },

    formLabel: {
        paddingTop: 0,
        marginBottom: 8,
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    formInput: {
        height: 48,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular'
    },

    expireDateContainer: {
        paddingRight: 9
    },

    cvvContainer: {
        paddingLeft: 9
    },

    countryText: {
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    list: {
        marginTop: 0
    },

    listItem: {
        marginLeft: 0,
        paddingLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    countryIcon: {
        width: 24,
        height: 24,
        marginRight: 16
    },

    listItemRightIcon: {
        fontSize: 25
    },

    countryText1: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    footer: {
        height: 89,
        paddingTop: 0,
        paddingBottom: 32,
        borderTopWidth: 0
    },

    saveBtn: {
        marginLeft: 25,
        marginRight: 25,
        height: 57,
        width: (width - 94),
        backgroundColor: 'rgb(230,54,166)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    saveBtnText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Medium'
    },

    cardContainer: {
        height: 48
    },

    cardIconContainer: {
        width: 40,
        height: 48,
        justifyContent: 'center'
    },

    cardIcon: {
        marginBottom: 0,
        marginTop: 5
    },

    scanIcon: {
        width: 25,
        height: 25
    },

    scanIconContainer: {
        width: 25,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center'
    }
}