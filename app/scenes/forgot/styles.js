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

    nextBtn: {
        marginTop: 124,
        marginLeft: 16,
        marginRight: 16,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255,169,88)',
        borderRadius: 100
    },

    nextBtnText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SanFranciscoText-Medium'
    }
};
