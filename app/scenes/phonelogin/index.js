import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Title,
    Thumbnail,
    Header,
    Item,
    Form,
    Input,
    Label,
    Left,
    Right
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { sendCode } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';

class PhoneLoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            phone: '',
            isError: false,
            isLoading: false,
            errorText: ""
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onNext(){
        if(this.state.phone == '' || this.state.phone.trim() == ''){
            this.setState({
                isError: true,
                errorText: 'Please enter your phone number.'
            });
        } else {
            var { dispatch } = this.props;
            //dispatch(NavigationActions.navigate({routeName: 'EnterCode'}));

            //show Indicator
            this.setState({
                isLoading: true
            });

            sendCode(this.state.phone)
            .then(data => {
                if(data.code != undefined){
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Invalid Phone number. Please try again.'
                    });
                }else{
                  console.log(data,'signin');
                    //hide Indicator
                    this.setState({
                        isLoading: false
                    });
                    dispatch(NavigationActions.navigate({routeName: 'EnterCode', params: {token: data.token, phone: this.state.phone}}));
                }
            })
            .catch(err => {
                //hide indicator
                this.setState({
                    isLoading: false,
                    isError: true,
                    errorText: 'Please check wifi or internet.'
                });
            });
        }
    }

    onSignup(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Interest'}));
    }

    onChangeText(text){
        this.setState({
            phone: text
        });
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
                    <Text style={styles.descText}>Enter your Phone number.</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>NUMBER</Label>
                            <Input style={styles.formInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText(text)}/>
                        </Item>
                    </Form>
                    <Text style={styles.descText2}>
                        Tap Next to get an SMS confirmation from Account Kit powered by Facebook. <Text style={styles.learnMoreBtn}>Learn more</Text>
                    </Text>
                    <Button block style={styles.loginBtn} onPress={() => this.onNext()}>
                        <Text style={styles.loginBtnText}>Next</Text>
                    </Button>
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(PhoneLoginScreen);
