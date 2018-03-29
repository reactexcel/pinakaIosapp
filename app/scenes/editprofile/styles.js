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

    saveBtnText: {
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    content: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 24
    },

    image: {
        width: 88,
        height: 88,
        borderRadius: 44
    },

    changeText: {
        marginTop: 12,
        fontFamily: 'SanFranciscoText-Regular',
        color: 'rgb(255,169,88)',
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5
    },

    detailText: {
        marginTop: 32,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    form: {
        marginTop: 16
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

    birthdayContainer: {
        marginRight: 8
    },

    zipcodeContainer: {
        marginLeft: 8
    },

    list: {
        marginTop: 5
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0
    },

    listItemText: {
        marginLeft: 0,
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 14
    },

    listItemRight: {
        alignItems: 'flex-end'
    },

    rightBtn: {
        width: 40,
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    manIcon: {
        width: 40,
        height: 40
    },

    interestText: {
        marginTop: 32,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#000'
    },

    checkListItem: {
        marginLeft: 0,
        borderBottomWidth: 0
    }

}