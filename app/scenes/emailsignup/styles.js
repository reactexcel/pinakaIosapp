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

    },

    progressContainer: {
        height: 4,
        width: width,
        backgroundColor: 'rgb(11,20,72)'
    },

    progress: {
        height: 4,
        backgroundColor: 'rgb(61,220,209)'
    },

    blockContainer: {
        paddingLeft: 32,
        paddingRight: 32
    },

    signupTitle: {
        marginTop: 24,
        fontSize: 28,
        fontFamily: 'SanFranciscoText-Bold',
        color: '#fff',
        textAlign: 'center'
    },

    descText: {
        marginTop: 8,
        fontSize: 17,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff',
        textAlign: 'center'
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

    phoneText1: {
        marginTop: 16,
        fontSize: 13,
        fontFamily: 'SanFranciscoText-Regular',
        textAlign: 'center',
        color: '#fff'
    },

    moreBtn: {
        fontSize: 13,
        color: 'rgb(253,152,71)',
        fontFamily: 'SanFranciscoText-Medium'
    },

    nextBtn: {
        marginTop: 80,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: 'rgb(230,54,166)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        height: 57
    },

    nextBtnText: {
        fontSize: 20,
        fontFamily: 'SanFranciscoText-Medium',
        color: '#fff'
    },

    codeContainer: {
        marginTop: 32,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    codeItem: {
        width: 40,
        height: 48,
        backgroundColor: 'rgb(11,20,72)',
        marginLeft: 7,
        marginRight: 7,
        textAlign: 'center',
        fontSize: 28,
        color: '#fff',
        fontFamily: 'SanFranciscoText-Regular'
    },

    sendBtnText: {
        marginTop: 20,
        textAlign: 'center',
        color: 'rgb(255,169,88)',
        fontFamily: 'SanFranciscoText-Regular',
        fontSize: 15
    },

    sendDescText: {
        marginTop: 32,
        textAlign: 'center',
        color: '#fff',
        fontSize: 13,
        fontFamily: 'SanFranciscoText-Regular',
        paddingLeft: 5,
        paddingRight: 5
    },

    termBtnText: {
        color: 'rgb(253,152,71)',
        fontFamily: 'SanFranciscoText-Medium',
        fontSize: 13
    },

    birthdayInputContainer: {
        marginRight: 9
    },

    zipcodeInputContainer: {
        marginLeft: 9
    },

    listForm: {
        marginTop: 22,
    },

    listFormItem: {
      backgroundColor: Colors.main,

        marginLeft: 0,
        paddingRight: 0,
        borderBottomWidth: 0,
        paddingTop: 10,
        paddingBottom: 10
    },

    listFormItemText: {
        fontSize: 14,
        fontFamily: 'SanFranciscoText-Regular',
        color: '#fff',
        marginLeft: 0
    },

    manIcon: {
        width: 40,
        height: 40
    },

    rightBtn: {
        width: 40,
        height: 40,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0
    },

    passwordDescText: {
       marginTop: 8,
       fontSize: 17,
       fontFamily: 'SanFranciscoText-Regular' ,
       textAlign: 'center',
       color: '#fff'
    },

    passwordShowBtn: {
        fontSize: 14,
        color: 'rgb(255,169,88)',
        fontFamily: 'SanFranciscoText-Regular',
        position: 'absolute',
        top: 0,
        right: 0
    }
}
