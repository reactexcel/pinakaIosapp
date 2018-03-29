import { Dimensions } from 'react-native';
const { width, height }  = Dimensions.get('window');
import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0
    },

    headerTitle: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold'
    },

    content: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },

    listItem: {
        marginLeft: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)',
        height: 56
    },

    listItemText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    },

    currencyText: {
        fontSize: 20,
        color: 'rgb(230,54,166)'
    }
}
