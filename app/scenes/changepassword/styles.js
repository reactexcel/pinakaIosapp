import { Colors } from '../../constants';

export default {
    container: {
        backgroundColor: Colors.main
    },

    header: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },

    headerTitle: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Bold',
        textAlign: 'center'
    },

    headerLeft: {
        flex: 0.1
    },

    headerRight: {
        flex: 0.1
    },

    backBtnIcon: {
        width: 25,
        height: 25
    },

    checkIcon: {
        fontSize: 40,
        color: '#fff',
        width: 25
    },

    headerBtn: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        backgroundColor: 'white'
    },

    input: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: 'black',
        marginBottom: 15,
        height: 48,        
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 17
    }
}