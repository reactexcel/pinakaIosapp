import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    background: {
        width: width,
        height: height
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
        paddingLeft: 47,
        paddingRight: 47
    },

    loginText: {
        fontSize: 28,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold',
        marginTop: 179
    },

    welcomeText: {
        fontSize: 17,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular',
        marginTop: 8
    },

    fbBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor:  'rgb(63,111,246)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 32
    },

    fbBtnIcon: {
        width: 25,
        height: 25
    },

    fbBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginLeft: 16,
        fontFamily: 'SanFranciscoText-Medium'
    },

    phoneBtn: {
        height: 57,
        borderRadius: 100,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20
    },

    phoneBtnIcon: {
        width: 25,
        height: 25
    },

    phoneBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginLeft: 16,
        fontFamily: 'SanFranciscoText-Medium'
    },

    bottomText: {
        marginTop: 32,
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular'
    },

    bottomEmailBtn: {
        fontSize: 17,
        color: 'rgb(253, 152, 71)',
        fontFamily: 'SanFranciscoText-Bold'
    }

}