import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    content: {
        position: 'relative'
    },

    background: {
        width: width,
        height: height
    },

    welcomeText: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 22,
        letterSpacing: 6,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular',
        backgroundColor: 'transparent'
    },

    logoText: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 52,
        letterSpacing: 1,
        color: '#fff',
        fontFamily: 'KiloGram',
        backgroundColor: 'transparent'
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 32,
        width: width
    },

    signupBtnContainer: {
        paddingLeft: 20,
        paddingRight: 8
    },

    loginBtnContainer: {
        paddingLeft: 8,
        paddingRight: 20
    },

    loginBtn: {
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        height: 57
    },

    loginBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontFamily: 'SanFranciscoText-Medium'
    },

    bottomText1: {
        fontSize: 28,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold',
        backgroundColor: 'transparent'
    },

    bottomText2: {
        marginTop: 8,
        marginBottom: 32,
        fontSize: 17,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular',
        backgroundColor: 'transparent'
    }
}