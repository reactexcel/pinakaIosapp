import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    backBtnIcon: {
        width: 25,
        height: 25
    },

    signupBtnText: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular'
    },

    content: {
        paddingLeft: 25,
        paddingRight: 25
    },

    loginText: {
        marginTop: 24,
        textAlign: 'center',
        fontSize: 28,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold'
    },

    descText: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular'
    },

    codeContainer: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    codeItem: {
        height: 48,
        width: 40,
        backgroundColor: 'rgb(11,20,72)',
        color: '#fff',
        fontSize: 28,
        textAlign: 'center'
    },

    sendNewBtn: {
        marginTop: 20        
    },

    sendNewBtnText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgb(255,169,88)',
        fontFamily: 'SanFranciscoText-Regular'
    },

    termsText: {
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
        marginTop: 32,
        paddingLeft: 7,
        paddingRight: 7,
        fontFamily: 'SanFranciscoText-Regular'
    },

    termBtn: {
        color: 'rgb(253,152,71)',
        fontSize: 13,
        fontFamily: 'SanFranciscoText-Regular'
    },

    nextBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor: 'rgb(230, 54, 166)',
        marginLeft: 23,
        marginRight: 23,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 38
    },

    nextBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Medium'
    }

};