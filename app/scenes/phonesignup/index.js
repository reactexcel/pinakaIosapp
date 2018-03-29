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
import { Dimensions, DatePickerIOS, TextInput, AsyncStorage } from 'react-native';
const { width, height } = Dimensions.get('window');
import styles from './styles';
import { StatusBar } from 'react-native';
import  PDatePicker from '../../components/datepicker/';
import EDialog from '../../components/edialog';
import { API } from '../../constants/api';
import { emailSignup, sendCode, verifyCode } from '../../actions/';
import PLoading from '../../components/loading';

class PhoneSignupScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            progress: 1,
            step: 0,
            hidePass: true,
            date: new Date(),
            showDatePicker: false,
            gender: true,
            marital: false,
            kids: false,
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",
            phone: "",
            email: "",
            zipcode: "",
            password: "",
            isError: false,
            errorText: "",
            isLoading: false,
            verifytoken: ""
        };
    }

    onBack(){
        if(this.state.step > 1){
            this.setState({
                progress: this.state.progress - 1,
                step: this.state.step - 1
            });
        }else if(this.state.step == 1){
            this.setState({
                step: this.state.step - 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }
    }

    onNext(progress, step){
      console.log(progress,step,'signup');
        if(this.state.step == 0){
            if(this.state.phone == "" || this.state.phone.trim() == ""){
                this.setState({
                    isError: true,
                    errorText: 'Pleae enter your phone number.'
                });
            }else{
                //show Indicator
                this.setState({
                    isLoading: true
                });

                sendCode(this.state.phone)
                .then(data => {
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
                        console.log(data,'asdas');
                        this.setState({
                            isLoading: false,
                            verifytoken: data.token,
                            progress: this.state.progress + progress,
                            step: this.state.step + step
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
        }else if(this.state.step == 1){
            if(
                this.state.num1 == "" || this.state.num1.trim() == '' ||
                this.state.num2 == "" || this.state.num2.trim() == '' ||
                this.state.num3 == "" || this.state.num3.trim() == '' ||
                this.state.num4 == "" || this.state.num4.trim() == '' ||
                this.state.num5 == "" || this.state.num5.trim() == '' ||
                this.state.num6 == "" || this.state.num6.trim() == ''
            ){
                this.setState({
                    isError: true,
                    errorText: 'Please enter your code.'
                });
            }else{
                //show Indicator
                this.setState({
                    isLoading: true
                });

                var code = this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5 + this.state.num6;
                verifyCode(this.state.verifytoken, code)
                .then(data => {
                    console.log(data,'sad');
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
                                    progress: this.state.progress + progress,
                                    step: this.state.step + step
                                });
                                break;
                            default:
                                this.setState({
                                    isLoading: false,
                                    isError: true,
                                    errorText: 'Unknown Error.'
                                });
                                break;
                        }
                    }else{
                        this.setState({
                            isLoading: false,
                            progress: this.state.progress + progress,
                            step: this.state.step + step
                        })
                    }
                })
                .catch(err => {
                    //hide Indiator
                    this.setState({
                        isLoading: false,
                        isError: true,
                        errorText: 'Please check your wifi or internet.'
                    })
                });
            }
        }else if(this.state.step == 2){
            if(this.state.email == '' || this.state.email.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please input your email address.'
                });
            }else if(this.state.zipcode == '' || this.state.zipcode.trim() == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please input your zipcode.'
                });
            }else{
                this.setState({
                    progress: this.state.progress + progress,
                    step: this.state.step + step
                });
            }
        }else{
            if(this.state.password == ''){
                this.setState({
                    isError: true,
                    errorText: 'Please input your password.'
                });
            }else{
                //sign up
                var { dispatch } = this.props;

                //show Indicator
                this.setState({
                    isLoading: true
                });

                var params = {
                    phone: this.state.phone,
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
                    console.log("data==========>",data)
                    console.log("data.code============>",data.code)
                    if(data.code != undefined){
                        console.log("data.code inside select============>",data.code)
                        switch(data.code){
                            case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email already used, Please try again.',
                                    step: 2
                                });
                                break;
                            case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This phone number already used, Pleae try again.',
                                    step: 0
                                })
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDEMAIL:
                                this.setState({
                                    isError: true,
                                    errorText: 'This email is invalid now. Please try again.',
                                    step: 2
                                });
                                break;
                            case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                                this.setState({
                                    isError: true,
                                    errorText: 'This zipcode is invalid now. Please try again',
                                    step: 2
                                });
                                break;
                        }
                    }else{
                        console.log("data.code_outside of select========>",data.code)
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
        dispatch(NavigationActions.navigate({routeName: 'Login', params: { type: 'login' }}));
    }

    togglePass(){
        this.setState({
            hidePass: !this.state.hidePass
        });
    }

    onCancel(){
        this.setState({
            showDatePicker: false
        });
    }

    onDone(date){
        this.setState({
            date: new Date(date),
            showDatePicker: false
        });
    }

    onDatePicker(){
        this.setState({
            showDatePicker: true
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
        })
    }

    toggleKids(kids){
        this.setState({
            kids: kids
        });
    }

    onChangeText(text, index){
        switch(index){
            case 1:
                this.setState({
                    num1: text.substring(text.length-1, text.length)
                });
                if(text.length > 0){
                    this.refs[2].focus();
                }
                break;
            case 2:
                this.setState({
                    num2: text.substring(text.length-1, text.length)
                });
                if(text.length > 0){
                    this.refs[3].focus();
                }
                break;
            case 3:
                this.setState({
                    num3: text.substring(text.length-1, text.length)
                });
                if(text.length > 0){
                    this.refs[4].focus();
                }
                break;
            case 4:
                this.setState({
                    num4: text.substring(text.length-1, text.length)
                });
                if(text.length > 0){
                    this.refs[5].focus();
                }
                break;
            case 5:
                this.setState({
                    num5: text.substring(text.length-1, text.length)
                });
                if(text.length > 0){
                    this.refs[6].focus();
                }
                break;
            case 6:
                this.setState({
                    num6: text.substring(text.length-1, text.length)
                });
                break;
            case 'password':
                this.setState({
                    password: text
                });
                break;
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
            case 'phone':
                this.setState({
                    phone: text
                });
                break;
        }
    }

    showDateFormat(){
        return this.state.date.getFullYear() + "-" + (this.state.date.getMonth() < 9? ("0" + (this.state.date.getMonth() + 1)):(this.state.date.getMonth()+ 1)) + "-" + (this.state.date.getDate() < 9? ("0" + (this.state.date.getDate())): (this.state.date.getDate()));
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
                    verifytoken: data.token,
                    progress: this.state.progress + 0,
                    step: this.state.step + 0
                });
            }
        })
        .catch(err => {
            //hide Indicator
            this.setState({
                isLoading: false,
            });
        });
    }

    render(){
        console.log(this.state,'signup');
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
                        <View style={[styles.progress, {width: width /3 * this.state.progress}]}/>
                    </View>
                    {this.state.step == 0?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Enter your phone number.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                <Label style={styles.formLabel}>NUMBER</Label>
                                <Input style={styles.formInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText(text, 'phone')}/>
                            </Item>
                        </Form>
                        <Text style={styles.phoneText1}>
                            Tap Next to get an SMS confirmation from Account Kit powered by Facebook. <Text style={styles.moreBtn}>Learn more</Text>
                        </Text>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(0, 1)}>
                            <Text style={styles.nextBtnText}>Next</Text>
                        </Button>
                    </View>: null}
                    {this.state.step == 1?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Enter your code.</Text>
                        <View style={styles.codeContainer}>
                            <TextInput ref="1" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 1)} value={this.state.num1}/>
                            <TextInput ref="2" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 2)} value={this.state.num2}/>
                            <TextInput ref="3" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 3)} value={this.state.num3}/>
                            <TextInput ref="4" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 4)} value={this.state.num4}/>
                            <TextInput ref="5" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 5)} value={this.state.num5}/>
                            <TextInput ref="6" style={styles.codeItem} keyboardType="numeric" maxLength={2} onChangeText={(text) => this.onChangeText(text, 6)} value={this.state.num6}/>
                        </View>
                        {/*<Text style={styles.sendBtnText}>Send New Code</Text>*/}
                        <Button transparent style={styles.sendNewBtn} block onPress={() => this.onSendNewCode()}>
                            <Text style={styles.sendNewBtnText}>Send New Code</Text>
                        </Button>
                        <Text style={styles.sendDescText}>
                            Tap Continue to accept Facebook’s <Text style={styles.termBtnText}>Terms, Data Policy, cookie use</Text> and the <Text style={styles.termBtnText}>Privacy Policy</Text> and <Text style={styles.termBtnText}>Terms of Service</Text> of Pinaka.
                        </Text>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.step == 2?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Sign Up</Text>
                        <Text style={styles.descText}>Please, enter your information.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                <Label style={styles.formLabel}>EMAIL</Label>
                                <Input style={styles.formInput} value={this.state.email} onChangeText={(text) => this.onChangeText(text, 'email')}/>
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
                                        <Input style={styles.formInput} keyboardType="numeric" value={this.state.zipcode} onChangeText={(text) => this.onChangeText(text, 'zipcode')}/>
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
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Continue</Text>
                        </Button>
                    </View>: null}
                    {this.state.step==3?
                    <View style={styles.blockContainer}>
                        <Text style={styles.signupTitle}>Create a password</Text>
                        <Text style={styles.passwordDescText}>Your password must include at least one symbol and be eight or more characters long.</Text>
                        <Form style={styles.form}>
                            <Item stackedLabel style={styles.formItem}>
                                {this.state.hidePass?
                                <Label style={styles.passwordShowBtn} onPress={() => this.togglePass()}>Show</Label>:
                                <Label style={styles.passwordShowBtn} onPress={() => this.togglePass()}>Hide</Label>}
                                <Label style={styles.formLabel}>PASSWORD</Label>
                                <Input style={styles.formInput} secureTextEntry={this.state.hidePass} value={this.state.password} onChangeText={(text) => this.onChangeText(text, 'password')}/>
                            </Item>
                        </Form>
                        <Button block style={styles.nextBtn} onPress={() => this.onNext(1,1)}>
                            <Text style={styles.nextBtnText}>Sign Up</Text>
                        </Button>
                    </View>: null}
                </Content>
                {this.state.showDatePicker?
                <PDatePicker date={this.state.date}  onCancel={() => this.onCancel()} onDone={(date) => this.onDone(date)}/> : null
                }
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

export default connect()(PhoneSignupScreen);
