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
    Right
} from 'native-base';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, AsyncStorage } from 'react-native';
import { searchUser, emailLogin } from '../../actions';
import PLoading from '../../components/loading';
const FBSDK = require('react-native-fbsdk');
const {
 LoginManager,
 AccessToken
} = FBSDK;

class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
      super(props);
      this.state = {
        isLoading: false,
      }
    }

    onBack(){
        var  { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onEmailLogin(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            dispatch(NavigationActions.navigate({routeName: 'EmailLogin'}));
        }else{
            dispatch(NavigationActions.navigate({routeName: 'EmailSignup', params: {interest: this.props.navigation.state.params.interest}}));
        }
    }

    onPhoneLogin(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            dispatch(NavigationActions.navigate({routeName: 'PhoneLogin'}));
        }else{
            dispatch(NavigationActions.navigate({routeName: 'PhoneSignup', params: {interest: this.props.navigation.state.params.interest}}));
        }
    }

    onSignup(){
        var { dispatch } = this.props;
        if(this.props.navigation.state.params.type == 'login'){
            dispatch(NavigationActions.navigate({routeName: 'Interest'}));
        }else{
            dispatch(NavigationActions.navigate({routeName: 'Login', params: { type: 'login' }}));
        }
    }

    onFacebookLogin(){
     console.log('facebook login');
     this.setState({isLoading:true});
     var { dispatch } = this.props;
     var interest = this.props.navigation.state.params.interest;
     try {
       LoginManager.logOut();
     LoginManager.logInWithReadPermissions(['email','public_profile']).then(
     (result) => {
       console.log(result,'asdsa');
       if (result.isCancelled) {
         console.log('Login cancelled');
       } else {
         AccessToken.getCurrentAccessToken().then(
           (data) => {
             // getting facebook user data
             console.log(data,'das');
               fetch('https://graph.facebook.com/v2.8/me?fields=email,name&access_token=' + data.accessToken)
               .then((response) => response.json())
               .then((json) => {
                 console.log(json,'data');
                 // Some user object has been set up somewhere, build that user here
                 const user = [];
                 user.name = json.name;
                 user.id = json.id;
                 user.email = json.email;
                 user.username = json.name;
                 searchUser(user).then(data => {
                   console.log(data);
                   if(data.status == 0 ){
                     console.log(data,'not');
                     this.setState({isLoading:false});
                     dispatch(NavigationActions.navigate({routeName: 'Facebooksignup', params: {user: user,interest: interest}}));
                   }else if(data.status == 1){
                     emailLogin(user.email, user.id)
                     .then(data => {
                         console.log(data);
                         //hide indicator
                         // this.setState({
                         //     isLoading: false
                         // });
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
                                 isLoading:false,
                                 isError: true,
                                 errorText: errorText
                             });
                         }else{

                             console.log('emaillgoin data-->', data)
                             //save token
                             AsyncStorage.setItem('user', JSON.stringify({data,loginType:'login'}));
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
                 });
               })
               .catch((error) => {
                 Alert(error,'ERROR GETTING DATA FROM FACEBOOK')
                 console.log(error,'ERROR GETTING DATA FROM FACEBOOK')
               })
           });
         console.log(result,'Login success with permissions: '
           +result.grantedPermissions.toString());
       }
     }
   ).catch((error)=>{
     this.setState({isLoading:false,isError:true,errorText:'Something went wrong'})
     console.log(error,'failed');
   });

 }
   catch(error) {
     console.log('Login fail with error: ' + error);
     this.setState({
       isLoading:false,
       isError: true,
       errorText: 'Something went wrong',
     });
   }
 }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Thumbnail square source={this.props.navigation.state.params.type == 'login'?require('../../assets/bgLogin.png'): require('../../assets/bgSignup.png')} style={styles.background}>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => this.onBack()}>
                                <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent onPress={() => this.onSignup()}>
                                {this.props.navigation.state.params.type == 'login'?
                                <Text style={styles.signupBtnText}>Sign Up</Text>:
                                <Text style={styles.signupBtnText}>Log In</Text>
                                }
                            </Button>
                        </Right>
                    </Header>
                    <Content style={styles.content}>
                        {this.props.navigation.state.params.type == 'login'?
                        <Text style={styles.loginText}>Log In</Text>:
                        <Text style={styles.loginText}>Sign Up</Text>
                        }
                        {this.props.navigation.state.params.type == 'login'?
                        <Text style={styles.welcomeText}>Welcome back</Text>:
                        <Text style={styles.welcomeText}>Your choice, we’re flexible.</Text>
                        }
                        <Button block style={styles.fbBtn} onPress={() => this.onFacebookLogin()} >
                            <Thumbnail square source={require('../../assets/icFacebbok.png')} style={styles.fbBtnIcon}/>
                            <Text style={styles.fbBtnText}>Facebook</Text>
                        </Button>
                        <Button block style={styles.phoneBtn} onPress={() => this.onPhoneLogin()}>
                            <Thumbnail square source={require('../../assets/icPhoneNumber.png')} style={styles.phoneBtnIcon}/>
                            <Text style={styles.phoneBtnText}>Phone Number</Text>
                        </Button>
                        <Text style={styles.bottomText}>
                            Actually, I’ll use <Text style={styles.bottomEmailBtn} onPress={() => this.onEmailLogin()}>Email</Text>
                        </Text>
                        {this.state.isLoading ? <PLoading color='white' /> : null}
                    </Content>
                </Thumbnail>
            </Container>
        );
    }
}

export default connect()(LoginScreen);
