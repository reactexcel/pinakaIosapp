import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    footer: {
        backgroundColor: '#fff',
        height: 49
    },

    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabItemContainer: {
        width: (width / 5)
    },

    tabItemBtn: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: (width / 5)
    },

    tabBtnWrapper: {
        width: (width / 5),
        alignItems: 'center',
        justifyContent: 'center'
    },

    tabBtnIcon: {
        width: 25,
        height: 25,
        marginTop: 3.5
    },

    tabBtnText: {
        fontSize: 10,
        fontFamily: 'SanFranciscoText-Medium',
        letterSpacing: 0.1,
        color: '#000'
    },

    tabBtnActiveText: {
        fontSize: 10,
        fontFamily: 'SanFranciscoText-Medium',
        letterSpacing: 0.1,
        color: 'rgb(230,54,166)'
    }
}