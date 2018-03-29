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
    Right,
    Input,
    Grid,
    Col,
    List,
    ListItem,
    Icon,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';
import { saveCard, addCard } from '../../actions';
import moment from 'moment';
import PLoading from '../../components/loading';
import EDialog from '../../components/edialog';

class AddCreditScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        var card = props.navigation.state.params.card;
        this.state = {
            action: props.navigation.state.params.action,
            number: card? card.number: "",
            expired_date: card? (card.expired_m <10? "0" + card.expired_m: card.expired_m ) + "/" + (card.expired_y - 2000): "",
            cvv: card?(card.cvv + "" ):"",
            isLoading: false,
            isError: false,
            errorText: "",
            expired_m: card?card.expired_m: 12,
            expired_y: card?card.expired_y: 44,
            showDatePicker: false
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onChangeText(field, text){
        switch(field){
            case 'number':
                this.setState({
                    number: text
                });
                break;
            case 'expired_date':  
                var newtext = text.replace('/','');
                console.log(newtext);
                if(text.length >= 5){
                    this.setState({
                        expired_date: newtext.substring(text.length - 5, text.length - 3) + "/" + newtext.substring(text.length - 3, text.length -1)
                    });
                }else{
                    this.setState({
                        expired_date: newtext.substring(0, 2) + "/" + newtext.substring(2, 4)
                    });
                }
                break;
            case 'cvv':
                this.setState({
                    cvv: text
                });
                break;
        }
    }

    onSave(){
        var { user, dispatch } = this.props;        

        //validate expired date
        if(this.state.number == "" || this.state.number.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input card number."
            });
        }else if(this.state.cvv == "" || this.state.cvv.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input cvv."
            });
        }else if(this.state.expired_date == "" || this.state.expired_date.trim() == ""){
            this.setState({
                isError: true,
                errorText: "Please input expired date."
            });
        }else{
            if(this.state.expired_date.length == 5){
                var t = this.state.expired_date.split("/");
                if(t.length != 2){
                    this.setState({
                        isError: true,
                        errorText: "Invalid Expired Date Format. Please try again."
                    });
                }else{
                    this.state.expired_m = parseInt(t[0]);
                    this.state.expired_y = parseInt(t[1]) + 2000;

                    ////show Indicator
                    this.setState({
                        isLoading: true 
                    });
                    
                    if(this.state.action == 'save'){                  

                        var params =  {
                            number: this.state.number,
                            expired_m: this.state.expired_m,
                            expired_y: this.state.expired_y,
                            cvv: this.state.cvv,
                            id: this.props.navigation.state.params.card._id
                        };
                
                        saveCard(user.token, params)
                        .then(data => {
                            if(data.code != undefined){
                                switch(data.code){
                                    case API.RESPONSE.CREDIT.INVALIDNUMBER:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Card Number, Please try again.",
                                            isLoading: false
                                        })
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDEXPIREDMONTH:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Expired Month, Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDEXPIREDYEAR:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Expired Year. Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDCVV:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid CVV. Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.EXPIRED:
                                        this.setState({
                                            isError: true,
                                            errorText: "Expired. Please try again.",
                                            isLoading: false
                                        })
                                        break;
                                }
                            }else{
                                //edit creditcards to store
                                var creditcards = this.props.user.creditcards;
                                var currentcard = this.props.navigation.state.params.card;

                                for(var i = 0; i < creditcards.length; i++){
                                    if(creditcards[i]._id == currentcard._id){
                                        creditcards[i] = data;
                                    }
                                }
                                dispatch({type: 'changecreditcards', data: creditcards});

                                this.setState({
                                    isLoading: false
                                });                            
                                dispatch(NavigationActions.back());
                            }            
                        })
                        .catch(err => {
                            this.setState({
                                isLoading: false
                            });
                        });
                    }else{ //add
                        var params =  {
                            number: this.state.number,
                            expired_m: this.state.expired_m,
                            expired_y: this.state.expired_y,
                            cvv: this.state.cvv
                        };
                
                        addCard(user.token, params)
                        .then(data => {
                            if(data.code != undefined){
                                switch(data.code){
                                    case API.RESPONSE.CREDIT.INVALIDNUMBER:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Card Number, Please try again.",
                                            isLoading: false
                                        })
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDEXPIREDMONTH:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Expired Month, Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDEXPIREDYEAR:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid Expired Year. Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.INVALIDCVV:
                                        this.setState({
                                            isError: true,
                                            errorText: "Invalid CVV. Please try again.",
                                            isLoading: false
                                        });
                                        break;
                                    case API.RESPONSE.CREDIT.EXPIRED:
                                        this.setState({
                                            isError: true,
                                            errorText: "Expired. Please try again.",
                                            isLoading: false
                                        })
                                        break;
                                }
                            }else{
                                //add creditcards to store
                                var creditcards = this.props.user.creditcards;
                                creditcards.push(data);
                                dispatch({type: 'changecreditcards', data: creditcards});

                                this.setState({
                                    isLoading: false
                                });
                                dispatch(NavigationActions.back());                            
                            }            
                        })
                        .catch(err => {
                            this.setState({
                                isLoading: false
                            });
                        });
                    }
                }
            }else{
                this.setState({
                    isError: true,
                    errorText: "Invalid Expired Date Format. Please try again."
                });
            }    
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
                    <Left style={styles.headerLeft}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        {this.state.action == 'add'?
                        <Title style={styles.title}>Add credit card</Title>:
                        <Title style={styles.title}>Edit credit card</Title>
                        }
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent>
                            <Text></Text>
                        </Button>   
                    </Right>
                </Header>
                {this.state.isError?
                <EDialog errorText={this.state.errorText} onClose={() => this.onErrorClose()}/>: null}
                <Content style={styles.content}>
                    <Form style={styles.form}>
                        <Item stackedLabel style={styles.formItem}>
                            <Label style={styles.formLabel}>NUMBER</Label>                            
                            <Grid style={styles.cardContainer}>
                                <Col style={styles.cardIconContainer}>
                                    <Icon name="card" style={styles.cardIcon}/>
                                </Col>
                                <Col>
                                    <Input style={styles.formInput} placeholder="1234 5678 9012 3456" keyboardType="numeric" value={this.state.number} onChangeText={(text) => this.onChangeText('number', text)}/>
                                </Col>
                                <Col style={styles.scanIconContainer} onPress={() => alert("scan")}>
                                    <Thumbnail   square source={require('../../assets/addcredit/icScanCard.png')} style={styles.scanIcon}/>
                                </Col>
                            </Grid>                          
                        </Item>
                        <Grid>
                            <Col style={styles.expireDateContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>EXPIRY DATE</Label>
                                    <Input style={styles.formInput} placeholder="MM / YY"  keyboardType="numeric" value={this.state.expired_date} onChangeText={(text) => this.onChangeText('expired_date', text)}/>
                                </Item>
                            </Col>
                            <Col style={styles.cvvContainer}>
                                <Item stackedLabel style={styles.formItem}>
                                    <Label style={styles.formLabel}>CVV</Label>
                                    <Input style={styles.formInput} maxLength={4} value={this.state.cvv} keyboardType="numeric" onChangeText={(text) => this.onChangeText('cvv', text)}/>
                                </Item>
                            </Col>
                        </Grid>                        
                    </Form>
                    <Text style={styles.countryText}>COUNTRY</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Body style={styles.listItemBody}>
                                <Thumbnail square source={require('../../assets/addcredit/us.png')} style={styles.countryIcon}/>
                                <Text style={styles.countryText1}>United States</Text>
                            </Body>
                            <Right>
                                <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.saveBtn} onPress={() => this.onSave()}>
                        <Text style={styles.saveBtnText}>Save</Text>
                    </Button>
                </Footer>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    user: state.user
})

export default connect(mapStateToProps)(AddCreditScreen);