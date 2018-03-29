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

    ballContainer: {
        marginTop: 66,
        width: width - 64,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    ballBtn: {
        width: 82,
        height: 82,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 38,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    },

    ballBtnText: {
        fontSize: 12,
        fontWeight:'600',
        color: '#000',
        fontFamily: 'SanFranciscoText-Regular'
    },

    ball1tapBtn: {
        width:84,
        height:84,
        backgroundColor: 'rgb(230,54,166)'
    },

    ball2tapBtn: {
        width:88,
        height:88,
        backgroundColor: 'rgb(253,152,71)'
    },

    ball2tapBtnText: {
        color: '#fff'
    },

    ball1tapBtnText: {
        color: '#fff'
    },

    ball1: {
        marginTop: 22,
        marginRight: 5
    },

    ball2: {
        marginTop: 0,
        marginRight: 7
    },

    ball3: {
        marginTop: 5,
        marginRight: 9
    },

    ball4: {
        marginTop: 8
    },

    ball5: {
        marginTop: -10
    },

    ball6: {
        marginLeft: 4,
        marginRight: 3,
        marginTop: -20
    },

    ball7: {
        marginTop: -20
    },

    ball8: {
        marginLeft: 44
    },

    ball9: {
        marginLeft: 4,
        marginTop: -5
    },

    footer: {
        height: 89,
        paddingBottom: 32,
        backgroundColor: 'transparent',
        borderTopWidth: 0
    },

    nextBtn: {
        width: (width - 96),
        height: 57,
        backgroundColor: 'rgb(63,111,246)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },

    nextBtnText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Medium'
    }
}
