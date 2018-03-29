import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Button,
    List,
    ListItem,
    Thumbnail,
    Body,
    Title,
    Text,
    Input
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { changePassword } from '../../actions';

class ChangePasswordScreen extends  Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
            password: "",
            confirm: "",
            isError: false,
            errorText: ""
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSave(){
        var { dispatch, user } = this.props;

        if(this.state.password == ""){
            this.setState({
                isError: true,
                errorText: "Please input new password"
            });
        } else if(this.state.confirm == ""){
            this.setState({
                isError: true,
                errorText: "Please input new confirm password."
            });
        }else if(this.state.password != this.state.confirm){
            this.setState({
                isError: true,
                errorText: "Password don't match with confirm."
            });
        }else{

            //show indicator
            this.setState({
                isLoading: true
            });
            
            changePassword(user.token, this.state.password)
            .then(data => {
                this.setState({
                    isLoading: false
                });
                dispatch(NavigationActions.back());
            })
            .catch(err => {
                this.setState({
                    isError: true,
                    errorText: "Please check wifi or internet.",
                    isLoading: false
                });
            });
        }
    }

    onErrorClose(){
        this.setState({
            isError: false,
            errorText: ""
        });
    }

    onChangeText(field, text){
        switch(field){
            case 'password':
                this.setState({
                    password: text
                });
                break;
            case 'confirm':
                this.setState({
                    confirm: text
                });
                break;
        }
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.headerLeft}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>Change Password</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onSave()} style={styles.headerBtn}>
                            <Icon name="checkmark" style={styles.checkIcon}/>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content style={styles.content}>
                    <Input placeholder="New password" style={styles.input} secureTextEntry={true}  value={this.state.password} onChangeText={(text) => this.onChangeText('password', text)}/>
                    <Input placeholder="New confirm" style={styles.input} secureTextEntry={true} value={this.state.confirm} onChangeText={(text) => this.onChangeText('confirm', text)}/>
                </Content>
                {this.state.isLoading?<PLoading color="black"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ChangePasswordScreen);