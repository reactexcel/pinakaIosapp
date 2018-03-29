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
    Label,
    Left,
    Form,
    Input
} from 'native-base';
import {
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import EDialog from '../../components/edialog';
import PLoading from '../../components/loading';
import { forgot } from '../../actions';

class ForgotScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            email: '',
            isLoading: false,
            isError: false,
            errorText: ""
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onNext(){
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.email == "" || this.state.email.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input your email address."
            });
        }else if(!reg.test(this.state.email)){
            this.setState({
                isError: true,
                errorText: "Please input valid email address."
            });
        }else{
            Alert.alert(
                'Check Your Email',
                'We sent an email to '+ this.state.email +'. Tap the link in that email to reset your password',
                [{
                    text: 'OK',
                    onPress: () => {
    
                    }
                }],
                {cancelable: false}
            );
            forgot(this.state.email)
            .then(() => {
                
            })
            .catch(err => {

            });
        }        
    }

    onChangeText(text){
        this.setState({
            email: text
        })
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        })
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
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>:null}
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Forgot your password?</Text>
                    <Text style={styles.descText}>Enter your email to find your account.</Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput} value={this.state.email} onChangeText={(text) => this.onChangeText(text)}/>
                        </Item>
                    </Form>         
                    <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </Button>          
                </Content>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(ForgotScreen);