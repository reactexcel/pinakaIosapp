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

    body: {
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },

    image: {
        width: width / 2,
        height: width / 2
    },

    title: {
        fontSize: 22,
        color: '#000',
        marginTop: 12,
        fontFamily: 'SanFranciscoText-Bold',
        textAlign: 'center',
        marginBottom: 32
    },

    list: {
        width: (width - 40)
    },

    listItem: {
        marginLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(221,221,225)'
    },

    listItemBody: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    listItemIcon: {
        fontSize: 30,
        marginRight: 16
    },

    listItemText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#000'
    }
}