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
        paddingLeft: 32,
        paddingRight: 32
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

    form: {
        marginTop: 32
    },

    formItem: {
        marginLeft: 0,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.5)',
        position: 'relative'
    },

    formLabel: {
        paddingTop: 0,
        marginBottom: 8,
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff'
    },

    formInput: {
        height: 48,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular'
    },

    forgotBtn: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 14,
        color: 'rgb(255,169,88)'
    },

    loginBtn: {
        marginTop: 36,
        height: 57,
        borderRadius: 100,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginBtnText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Medium'
    },

    descText2: {
        fontSize: 13,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular',
        textAlign: 'center'
    },

    learnMoreBtn: {
        color: 'rgb(253,152,71)',
        fontFamily: 'SanFranciscoText-Medium',
        fontSize: 13
    }
}