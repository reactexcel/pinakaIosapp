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

    title: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#fff'
    },

    calendar: {
        marginTop: 0,
        height: 140
    },

    calendarItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (width/7)
    },

    dayText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center'
    },

    dateContainer: {
        width: 42,
        height: 42,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    dateActiveContainer: {
        backgroundColor: 'rgb(230,54,166)',
        borderRadius: 21
    },

    dateText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff',
        lineHeight: 20,
        textAlign: 'center'
    },

    fullDateText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff'
    },

    content: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0
    },

    list: {
        borderTopWidth: 1,
        borderTopColor: 'rgb(221,221,225)'
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        paddingTop: 23,
        paddingBottom: 23
    },

    listItemText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    footer: {
        height: 80,
        paddingTop: 12,
        paddingBottom: 11,
        paddingLeft: 48,
        paddingRight: 48,
        shadowOffset: { x: 0, y: -1 },
        shadowColor: '#000',
        shadowOpacity: 0.14,
        shadowRadius: 4
    },

    bookBtn: {
        height: 57,
        width: (width - 96),
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },

    bookBtnText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Medium'
    }
}