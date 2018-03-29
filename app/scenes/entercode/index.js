import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Thumbnail,
    Header,
    Item,
    Form,
    Input,
    Label,
    Left,
    Right,
    View
 } from 'native-base';
 import {
     TextInput
 } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { loginCode,verifyCode } from '../../actions/';
import { sendCode } from '../../actions';
import PLoading from '../../components/loading';

class EnterCodeScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",
            token: this.props.navigation.state.params.token,
            phone: this.props.navigation.state.params.phone,
            isError: false,
            errorText: "",
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    onLogin(){
        console.log(this.props.navigation,'asdsa');
        if(
            this.state.num1 == "" || this.state.num1.trim() == "" ||
            this.state.num2 == "" || this.state.num2.trim() == "" ||
            this.state.num3 == "" || this.state.num3.trim() == "" ||
            this.state.num4 == "" || this.state.num4.trim() == "" ||
            this.state.num5 == "" || this.state.num5.trim() == "" ||
            this.state.num6 == "" || this.state.num6.trim() == ""
        ){
            this.setState({
                isError: true,
                errorText: 'Please input verify code.'
            });
        }else{
            var { dispatch } = this.props;

            //show Indicator
            this.setState({
                isLoading: true
            });

            var code = this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5 + this.state.num6;
            console.log(this.state.token,'send token');
            verifyCode(this.state.token, code)
            .then(data => {
              console.log(data,'verify code');
                if(data.code != undefined){
                    switch(data.code){
                        case API.RESPONSE.VERIFYCODE.INVALIDCODE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: 'Invalid code. Please try again.'
                            });
                            break;
                            case API.RESPONSE.VERIFYCODE.EMPTYCODE:
                                this.setState({
                                    isLoading: false,
                                    isError: true,
                                    errorText: 'User Not Exists. Please SIGNUP with this Number'
                                });
                                break;
                        default:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: 'Unknown Error.'
                            })
                            break;
                    }
                }else{
                    //save token
                    dispatch({type: 'setprofile', data: data});
                    dispatch(NavigationActions.navigate({routeName: 'Tab'}));
                }
            })
            .catch(err => {
                //hide Indicator
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorText: 'Please check your wifi or internet.'
                });
            });

        }
    }

    onChangeText(text, index){
        switch(index){
            case 1:
                this.setState({
                    num1: text.substring(text.length-1, text.length)
                });
                if(text.length >  0){
                    this.refs[2].focus();
                }
                break;
            case 2:
                this.setState({
                    num2: text.substring(text.length-1, text.length)
                });
                if(text.length >  0){
                    this.refs[3].focus();
                }
                break;
            case 3:
                this.setState({
                    num3: text.substring(text.length-1, text.length)
                });
                if(text.length >  0){
                    this.refs[4].focus();
                }
                break;
            case 4:
                this.setState({
                    num4: text.substring(text.length-1, text.length)
                });
                if(text.length >  0){
                    this.refs[5].focus();
                }
                break;
            case 5:
                this.setState({
                    num5: text.substring(text.length-1, text.length)
                });
                if(text.length >  0){
                    this.refs[6].focus();
                }
                break;
            case 6:
                this.setState({
                    num6: text.substring(text.length-1, text.length)
                });
                break;
        };
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    onSendNewCode() {
        //show Indicator
        this.setState({
            isLoading: true
        });

        sendCode(this.state.phone)
        .then(data => {
            console.log(data)
            if(data.code != undefined){
                if(data.code == API.RESPONSE.SENDCODE.INVALIDPHONE){
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Invalid Phone number. Please try again.'
                    });
                }
            }else{
                //hide Indicator
                this.setState({
                    isLoading: false,
                    token: data.token,
                });
            }
        })
        .catch(err => {
            //hide Indicator
            this.setState({
                isLoading: false,
                isError: true,
                errorText: 'Invalid Code. Pleasey try again.'
            });
        });
    }

    render(){
      console.log(this.props,'asdas');
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.onBack()}>
                                <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => this.onSignup()}>
                                <Text style={styles.signupBtnText}>Sign Up</Text>
                            </Button>
                        </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Log In</Text>
                    <Text style={styles.descText}>Enter your code.</Text>
                    <View style={styles.codeContainer}>
                        <TextInput ref='1' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="next" value={this.state.num1} onChangeText={(text) => this.onChangeText(text, 1)}/>
                        <TextInput ref='2' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="next" value={this.state.num2} onChangeText={(text) => this.onChangeText(text, 2)}/>
                        <TextInput ref='3' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="next" value={this.state.num3} onChangeText={(text) => this.onChangeText(text, 3)}/>
                        <TextInput ref='4' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="next" value={this.state.num4} onChangeText={(text) => this.onChangeText(text, 4)}/>
                        <TextInput ref='5' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="next" value={this.state.num5} onChangeText={(text) => this.onChangeText(text, 5)}/>
                        <TextInput ref='6' style={styles.codeItem} maxLength={2} keyboardType="numeric" returnKeyType="done" value={this.state.num6} onChangeText={(text) => this.onChangeText(text, 6)}/>
                    </View>
                    <Button transparent style={styles.sendNewBtn} block onPress={() => this.onSendNewCode()}>
                        <Text style={styles.sendNewBtnText}>Send New Code</Text>
                    </Button>
                    <Text style={styles.termsText}>
                        Tap Continue to accept Facebook’s <Text style={styles.termBtn}>Terms, Data Policy, cookie use</Text> and <Text style={styles.termBtn}>the Privacy Policy and Terms of Service</Text> of Pinaka.
                    </Text>
                    <Button block style={styles.nextBtn} onPress={() => this.onLogin()}>
                        <Text style={styles.nextBtnText}>Continue</Text>
                    </Button>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>: null}
            </Container>
        );
    }
}

export default connect()(EnterCodeScreen);
