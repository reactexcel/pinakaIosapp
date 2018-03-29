import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Title,
    Text,
    Header,
    Thumbnail,
    View,
    Grid,
    Col,
    Button
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import PLoading from '../../components/loading';
import { StatusBar, AsyncStorage } from 'react-native';

class WelcomeScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
      super(props);
      this.state = {
        isLoading: false,
      }
    }

    componentWillMount(){
      var { dispatch } = this.props;
      AsyncStorage.getItem('user', (err, result) => {
        if(result !== null ){
          this.setState({isLoading:true});
          const user = JSON.parse(result);
          console.log(user,'AsyncStorage');
          if(user.user == 'logout'){
            this.setState({isLoading:false});
          } else if(user.loginType == 'login'){
            console.log(user,'login');
            dispatch({type: 'setprofile', data: user.data});
            dispatch(NavigationActions.navigate({routeName: 'Tab'}));
          }
        } else {
          this.setState({isLoading:false});
        }
      });
    }

    onLogin(){
        var  { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: {type: 'login'}}));
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Thumbnail square source={require('../../assets/backgroundFull.png')} style={styles.background}>
                    <Text style={styles.welcomeText}>WELCOME TO</Text>
                    <Text style={styles.logoText}>PINAKA</Text>
                </Thumbnail>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText1}>Here is some text.</Text>
                    <Text style={styles.bottomText2}>Here is some text.</Text>
                    <Grid>
                        <Col style={styles.signupBtnContainer}>
                            <Button block style={styles.loginBtn} onPress={() => this.onSignup()}>
                                <Text style={styles.loginBtnText}>Sign Up</Text>
                            </Button>
                        </Col>
                        <Col style={styles.loginBtnContainer}>
                            <Button block style={styles.loginBtn} onPress={() => this.onLogin()}>
                                <Text style={styles.loginBtnText}>Log In</Text>
                            </Button>
                        </Col>
                    </Grid>
                </View>
                {this.state.isLoading ? <PLoading color="white" /> : null}
            </Container>
        );
    }
}

export default connect()(WelcomeScreen);
