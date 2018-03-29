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
    Left,
    Form,
    Item,
    Label,
    View,
    Grid,
    Row,
    Col,
    List,
    ListItem,
    Icon,
    Right,
    CheckBox,
    Input,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, Dimensions } from 'react-native';
import  PDatePicker from '../../components/datepicker/';
const { width, height } = Dimensions.get('window');
import { updateProfile,getInterests } from '../../actions';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';
import { API } from '../../constants';

class EditProfileScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            gender: props.user? (props.user.gender == 1?true: false): false,
            marital: props.user? (props.user.marital == 1? true: false): false,
            kids: props.user? (props.user.kids == 1? true: false): false,
            interests: [false, false, false, false, false, false, false, false, false],
            showDatePicker: false,
            date: props.user?new Date(props.user.birthday): new Date(),
            name: props.user? props.user.name:"",
            zipcode: props.user?props.user.zipcode:"",
            email: props.user?(props.user.email?props.user.email: ""): "",
            phone: props.user?(props.user.phone?props.user.phone.substring(2, props.user.phone.length): ""): "",
            isLoading: false,
            isError: false,
            errorText: "",
            interestTemplates: []
        };

        var interests = [];
        for (var i = 0; i < props.user.interests.length; i++){
            interests.push(props.user.interests[i].id.name);
        }
        var temp = ["Laser Tag", "Arcade", "Cosmic bowling", "Kids party", "League", "Bowling", "Group event", "Adult party", "Food"];

        for(var i = 0; i < interests.length; i++){
            for(var j = 0; j < temp.length; j++){
                if(interests[i] == temp[j]){
                    this.state.interests[j] = true;
                }
            }
        }

        getInterests()
        .then(interests => {
            this.setState({
                interestTemplates: interests
            });
        })
        .catch(err => {
            alert("Please check wifi or internet.");
        })
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSave(){
        //interests
        var newInterests = "";
        for(var i = 0; i < this.state.interests.length; i++){
            if(this.state.interests[i] == true){
                newInterests += this.state.interestTemplates[i]._id + ",1:";
            }
        }
        if(newInterests != ''){
            newInterests = newInterests.substring(0, newInterests.length - 1);
        }
        //alert(newInterests);

        if(this.state.name == "" || this.state.name.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input your name."
            });
        }else if(this.state.zipcode == "" || this.state.zipcode.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input zipcode."
            });
        }else if(this.state.email == "" || this.state.email.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Plese input your email address."
            });
        }else if(this.state.phone == "" || this.state.phone.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input your phone number"
            });
        }else{
            var params = {
                name:  this.state.name,
                birthday: this.showDateFormat(),
                zipcode: this.state.zipcode,
                gender: this.state.gender,
                marital: this.state.marital,
                kids: this.state.kids,
                email: this.state.email,
                phone: this.state.phone,
                interests: newInterests
            };
            var { user, dispatch } = this.props;

            //show Indicator
            this.setState({
                isLoading: true
            });

            updateProfile(user.token, params)
            .then(data => {
                if(data.code != undefined){
                    switch(data.code){
                        case  API.RESPONSE.SIGNUP.INVALIDEMAIL:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid email address, please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.INVALIDZIPCODE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid zipcode. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.INVALIDPHONE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "Invalid phone number. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.DUPLICATEEMAIL:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "This email already used. Please try again."
                            });
                            break;
                        case API.RESPONSE.SIGNUP.DUPLICATEPHONE:
                            this.setState({
                                isLoading: false,
                                isError: true,
                                errorText: "This phone already used. Please try again."
                            });
                            break;
                    }
                }else{
                    this.setState({
                        isLoading: false
                    });
                    dispatch({type: 'setprofile', data: data});
                    dispatch(NavigationActions.back());
                }
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

    onValueChange(index){
        this.state.interests[index] = !this.state.interests[index];
        this.setState({
            kids: this.state.kids
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

    showDateFormat(){
        return this.state.date.getFullYear() + "-" + (this.state.date.getMonth() < 9? ("0" + (this.state.date.getMonth() + 1)):(this.state.date.getMonth()+ 1)) + "-" + (this.state.date.getDate() < 9? ("0" + (this.state.date.getDate())): (this.state.date.getDate()));
    }

    onChangeText(field, text){
        switch(field){
            case "name":
                this.setState({
                    name: text
                });
                break;
            case "zipcode":
                this.setState({
                    zipcode: text
                });
                break;
            case "email":
                this.setState({
                    email: text
                });
                break;
            case "phone":
                this.setState({
                    phone: text
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
        StatusBar.setBarStyle('dark-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack1.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent onPress={() => this.onSave()}>
                            <Text style={styles.saveBtnText}>Save</Text>
                        </Button>
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>:null}
                <Content style={styles.content}>
                    <Body>
                        <Thumbnail source={require('../../assets/home/1.png')} style={styles.image}/>
                        <Text  onPress={() => alert("change photo")} style={styles.changeText}>Change photo</Text>
                    </Body>
                    <Text style={styles.detailText}>
                        Private details
                    </Text>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>YOUR NAME</Label>
                            <Input style={styles.formInput} value={this.state.name} onChangeText={(text) => this.onChangeText("name", text)}/>
                        </Item>
                        <Grid>
                            <Col style={styles.birthdayContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>BIRTHDAY</Label>
                                    <Text  onPress={() => this.onDatePicker()} style={[styles.formInput,{ width: width/2 -28, lineHeight: 48}]}>{this.showDateFormat()}</Text>
                                </Item>
                            </Col>
                            <Col style={styles.zipcodeContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>ZIP CODE</Label>
                                    <Input style={styles.formInput} keyboardType="numeric" maxLength={5} value={this.state.zipcode} onChangeText={(text) => this.onChangeText('zipcode', text)}/>
                                </Item>
                            </Col>
                        </Grid>
                    </Form>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>GENDER</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(true)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/femaleNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleGender(false)}>
                                    {this.state.gender?
                                    <Thumbnail square source={require('../../assets/profile/maleNormalLight.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/maleSelected.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>MARITAL STATUS</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(true)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/profile/marriedSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/marriedNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleMarital(false)}>
                                    {this.state.marital?
                                    <Thumbnail square source={require('../../assets/profile/femaleNormalLight.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/femaleSelected.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.listItemText}>DO YOU HAVE KIDS?</Text>
                            </Body>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(true)}>
                                    {this.state.kids?
                                    <Thumbnail square source={require('../../assets/profile/yesSelected.png')} style={styles.manIcon}/>:
                                    <Thumbnail square source={require('../../assets/profile/yesNormalLight.png')} style={styles.manIcon}/>
                                    }
                                </Button>
                            </Right>
                            <Right style={styles.listItemRight}>
                                <Button transparent style={styles.rightBtn} onPress={() => this.toggleKids(false)}>
                                        {this.state.kids?
                                        <Thumbnail square source={require('../../assets/profile/noNormalLight.png')} style={styles.manIcon}/>:
                                        <Thumbnail square source={require('../../assets/profile/noSelected.png')} style={styles.manIcon}/>
                                        }
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>EMAIL</Label>
                            <Input style={styles.formInput} autoCapitalize={false} value={this.state.email} onChangeText={(text) => this.onChangeText('email', text)}/>
                        </Item>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>PHONE</Label>
                            <Input style={styles.formInput} keyboardType="numeric" value={this.state.phone} onChangeText={(text) => this.onChangeText('phone', text)}/>
                        </Item>
                    </Form>
                    <Text style={styles.interestText}>My interests</Text>
                    {this.state.interestTemplates.length > 0?
                    <Grid>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[0]} onPress={() => this.onValueChange(0)}/>
                                    <Body>
                                        <Text>Laser Tag</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[1]} onPress={() => this.onValueChange(1)}/>
                                    <Body>
                                        <Text>Arcade</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[2]} onPress={() => this.onValueChange(2)} />
                                    <Body>
                                        <Text>Cosmic bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[3]} onPress={() => this.onValueChange(3)}/>
                                    <Body>
                                        <Text>Kids party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[4]} onPress={() => this.onValueChange(4)}/>
                                    <Body>
                                        <Text>League</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[5]} onPress={() => this.onValueChange(5)}/>
                                    <Body>
                                        <Text>Bowling</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[6]} onPress={() => this.onValueChange(6)}/>
                                    <Body>
                                        <Text>Group event</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[7]} onPress={() => this.onValueChange(7)}/>
                                    <Body>
                                        <Text>Adult party</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ListItem style={styles.checkListItem}>
                                    <CheckBox checked={this.state.interests[8]} onPress={() => this.onValueChange(8)} />
                                    <Body>
                                        <Text>Food</Text>
                                    </Body>
                                </ListItem>
                            </Col>
                        </Row>
                    </Grid>: null}
                    <View style={{height: 44}}/>
                </Content>
                {this.state.showDatePicker?
                <PDatePicker date={this.state.date}  onCancel={() => this.onCancel()} onDone={(date) => this.onDone(date)}/> : null
                }
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(EditProfileScreen);