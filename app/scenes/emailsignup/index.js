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
    Right,
    View,
    Grid,
    Col,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import { Dimensions, AsyncStorage } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './styles';
import { StatusBar } from 'react-native';
import PDatePicker from '../../components/datepicker/';
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { emailSignup } from '../../actions/';
import PLoading from '../../components/loading';

class EmailSignupScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            progress: 1,
            hidePass: true,
            gender: true,
            marital: false,
            kids: false,
            email: "",
            birthday: new Date(),
            zipcode: "",
            password: "",
            showDatePicker: false,
            isError: false,
            errorText: "",
            isLoading: false
        }

        //alert(this.props.navigation.state.params.interest);
    }

    onBack(){
        if(this.state.progress > 1){
            this.setState({
                progress: this.state.progress - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }
    }

    onNext(){
        if(this.state.progress < 2){
            if(this.state.email == '' || this.state.email.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your email address.'
                });
            }else if(this.state.zipcode == '' || this.state.zipcode.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your zipcode.'
                });
            } else{
                this.setState({
                    progress: this.state.progress + 1
                });
            }
        }else{
            if(this.state.password == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please enter password'
                });
            }else{
                //onSign Up

                //show Indicator
                this.setState({
                    isLoading: true
                });

                var { dispatch } = this.props;
                var params = {
                    email: this.state.email,
                    birthday: this.showDateFormat(),
                    zipcode: this.state.zipcode,
                    gender: this.state.gender,
                    marital: this.state.marital,
                    kids: this.state.kids,
                    password: this.state.password,
                    interests: this.props.navigation.state.params.interest
                };
                emailSignup(params)
                .then(data => {
                    //hide indicator
                    this.setState({
                        isLoading: false
                    })
                    if(data.code != undefined){
                        switch(data.code){
                            case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email already used, Please try again.',
                                    progress: 1
                                });
                                break;
                            case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This phone number already used, Pleae try again.',
                                    progress: 2
                                })
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email is invalid now. Please try again.',
                                    progress: 2
                                });
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This zipcode is invalid now. Please try again',
                                    progress: 2
                                });
                                break;
                        }
                    }else{
                        //save token
                        AsyncStorage.setItem('user', JSON.stringify({data,loginType:'login'}));
                        dispatch({type: 'setprofile', data: data});
                        dispatch(NavigationActions.navigate({routeName: 'Tab'}));
                    }
                })
                .catch(err => {
                    this.setState({
                        isError: true,
                        errorText: 'Plese check wifi or internet.'
                    });
                });
            }
        }
    }

    onLogin(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: {type: 'login'}}));
    }

    togglePass(){
        this.setState({
            hidePass: !this.state.hidePass
        });
    }

    toggleGender(gender){
        this.setState({
            gender: gender
        });
    }

    toggleMarital(marital){
        this.setState({
           marital: marital
        });
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
    }

    onChangeText(field, text){
        switch(field){
            case 'email':
                this.setState({
                    email: text
                });
                break;
            case 'zipcode':
                this.setState({
                    zipcode: text
                });
                break;
            case 'password':
                this.setState({
                    password: text
                });
                break;
        }
    }

    onCancel(){
        this.setState({
            showDatePicker: false
        });
    }

    onDone(date){
        this.setState({
            showDatePicker: false,
            birthday: new Date(date)
        });
    }

    onDatePicker(){
        this.setState({
            showDatePicker: true
        });
    }

    showDateFormat(){
        return this.state.birthday.getFullYear() + "-" + (this.state.birthday.getMonth() < 9? ("0" + (this.state.birthday.getMonth() + 1)):(this.state.birthday.getMonth()+ 1)) + "-" + (this.state.birthday.getDate() < 9? ("0" + (this.state.birthday.getDate())): (this.state.birthday.getDate()));
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
                        <Button transparent onPress={() => this.onLogin()}>
                            <Text style={styles.signupBtnText}>Log In</Text>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content style={styles.content}>
                    <View style={styles.progressContainer}>
                        <View style={[styles.progress, { width: width / 2 * this.state.progress}]}/>
                    </View>
                    {this.state.progress == 1?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Please, enter your information.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                <Label style={styles.formLabel}>EMAIL</Label>
                                <Input style={styles.formInput} autoCapitalize={false} value={this.state.email} onChangeText={(text) => this.onChangeText('email', text)}/>
                            </Item>
                            <Grid>
                                <Col style={styles.birthdayInputContainer}>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>BIRTHDAY</Label>
                                        <Text  onPress={() => this.onDatePicker()} style={[styles.formInput,{ width: width/2 -41, lineHeight: 48}]}>{this.showDateFormat()}</Text>
                                    </Item>
                                </Col>
                                <Col style={styles.zipcodeInputContainer}>
                                    <Item stackedLabel style={styles.formItem}>
                                        <Label style={styles.formLabel}>ZIP CODE</Label>
                                        <Input style={styles.formInput} keyboardType="numeric" onChangeText={(text) => this.onChangeText('zipcode', text)}/>
                                    </Item>
                                </Col>
                            </Grid>
                            <List style={styles.listForm}>
                                <ListItem style={styles.listFormItem}>
                                    <Body>
                                        <Text style={styles.listFormItemText}>GENDER</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(true)}>
                                            {this.state.gender?
                                            <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/femaleNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(false)}>
                                            {this.state.gender?
                                            <Thumbnail square source={require('../../assets/profile/maleNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>
                                    <Body>
                                        <Text style={styles.listFormItemText}>MARITAL STATUS</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(true)}>
                                            {this.state.marital?
                                            <Thumbnail square source={require('../../assets/profile/marriedSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/marriedNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(false)}>
                                            {this.state.marital?
                                            <Thumbnail square source={require('../../assets/profile/maleNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                                <ListItem style={styles.listFormItem}>
                                    <Body>
                                        <Text style={styles.listFormItemText}>DO YOU HAVE KIDS?</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(true)}>
                                            {this.state.kids?
                                            <Thumbnail square source={require('../../assets/profile/yesSelected.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/yesNormal.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                    <Right>
                                        <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(false)}>
                                            {this.state.kids?
                                            <Thumbnail square source={require('../../assets/profile/noNormal.png')} style={styles.manIcon}/>:
                                            <Thumbnail square source={require('../../assets/profile/noSelected.png')} style={styles.manIcon}/>
                                            }
                                        </Button>
                                    </Right>
                                </ListItem>
                            </List>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.progress == 2?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Create a password</Text>
                        <Text style={styles.passwordDescText}>Your password must include at least one symbol and be eight or more characters long.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                {this.state.hidePass?
                                <Label onPress={() => this.togglePass()} style={styles.passwordShowBtn}>Show</Label>:
                                <Label onPress={() => this.togglePass()} style={styles.passwordShowBtn}>Hide</Label>
                                }
                                <Label style={styles.formLabel}>PASSWORD</Label>
                                <Input style={styles.formInput} secureTextEntry={this.state.hidePass} value={this.state.password} onChangeText={(text) => this.onChangeText('password', text)}/>
                            </Item>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                            <Text style={styles.nextBtnText}>Sign Up</Text>
                        </Button>
                    </View>: null}
                </Content>
                {this.state.showDatePicker?
                <PDatePicker date={this.state.birthday}  onCancel={() => this.onCancel()} onDone={(date) => this.onDone(date)}/> : null
                }
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(EmailSignupScreen);
