import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Header,
    Title,
    Thumbnail,
    Left,
    Right,
    Form,
    Item,
    Label,
    Input
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { emailLogin } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants';

class EmailLoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            isError: false,
            errorText: ""
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onForgot(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Forgot'}));
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    onLogin(){
        var { dispatch } = this.props;

        //show indicator
        this.setState({
            isLoading: true
        });

        emailLogin(this.state.email, this.state.password)
        .then(data => {
            //hide indicator
            this.setState({
                isLoading: false
            });
            if(data.code != undefined){
                var errorText = "";
                switch(data.code){
                    case API.RESPONSE.LOGIN.EMPTYEMAIL: 
                        errorText = "Please input your email address.";
                        break;
                    case API.RESPONSE.LOGIN.EMPTYPASSWORD:
                        errorText = "Please input your password.";
                        break;
                    case API.RESPONSE.LOGIN.NOTMATCH:
                        errorText = "Those credentials don't look right. Please try again.";
                        break;
                }
                this.setState({
                    isError: true,
                    errorText: errorText
                });
            }else{
                //save token
                dispatch({type: 'setprofile', data: data});
                dispatch(NavigationActions.navigate({routeName: 'Tab'}));
            }
        })
        .catch(err => {
            console.log(err);
            //hide indicator
            this.setState({
                isLoading: false,
                isError: true,
                errorText: "Please check your wifi or internet."
            });            
        });
    }

    onChangeText(field,text){
        switch(field){
            case 'email':
                this.setState({
                    email: text
                });
            break;
            case 'password':
                this.setState({
                    password: text
                });
            break;
        }
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    render(){
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
                    <Text style={styles.descText}>Enter your email and password</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput} autoCapitalize={false} keyboardType="email-address" onChangeText={(text) => this.onChangeText('email',text)} value={this.state.email}/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.forgotBtn} onPress={() => this.onForgot()}>Forgot</Label>
                            <Label style={styles.formLabel}>PASSWORD</Label>
                            <Input style={styles.formInput} secureTextEntry={true} onChangeText={(text) => this.onChangeText('password', text)} value={this.state.password}/>
                        </Item>
                    </Form>
                    <Button block style={styles.loginBtn} onPress={() => this.onLogin()}>
                        <Text style={styles.loginBtnText}>Log In</Text>
                    </Button>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        )
    }
}

export default connect()(EmailLoginScreen);