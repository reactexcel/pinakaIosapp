import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Header,
    Left,
    Thumbnail,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Button,
    Right,
    Title,
    View,
    Footer,
    Grid,
    Col
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';
import { deleteCard } from '../../actions';
import PLoading from '../../components/loading';

class CreditDetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        var creditcards = this.props.user.creditcards;
        var currentcardindex = -1;
        for(var i = 0; i < creditcards.length; i++){
            if(creditcards[i]._id == this.props.navigation.state.params.id){
                currentcardindex = i;
            }
        }
        this.state = {
            cardindex: currentcardindex,
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onDelete(){
        var { dispatch, user } = this.props;
        
        //shoe Indicator
        this.setState({
            isLoading: true
        });
        
        deleteCard(user.token, this.props.user.creditcards[this.state.cardindex]._id)
        .then(data => {
            //delete card to store
            var creditcards = this.props.user.creditcards;            
            creditcards.splice(this.state.cardindex, 1);
                   
            dispatch({type: 'changecreditcards', data: creditcards});

            this.setState({
                isLoading: false
            });
            dispatch(NavigationActions.back());
        })
        .catch(err => {
            this.setState({
                isLoading: false
            });
        });
    }

    onEdit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'AddCredit', params: {card: this.props.user.creditcards[this.state.cardindex], action: 'save'}}));
    }

    showNumber(number){
        return  number.substring(number.length - 4, number.length);
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.IconContainer}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.headerTitle}>Master Card</Title>
                    </Body>
                    <Right style={styles.IconContainer}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                {this.props.user.creditcards[this.state.cardindex]?
                <Content style={styles.content}>
                    <Text style={styles.numberText}>NUMBER</Text>
                    <View style={styles.numberContainer}>
                        <Thumbnail square source={require('../../assets/payment/mastercard.png')} style={styles.cardIcon}/>
                        <Text style={styles.cardNumberText}>
                            &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {this.showNumber(this.props.user.creditcards[this.state.cardindex].number)}
                        </Text>
                    </View>
                    <Text style={styles.expiredDateText}>EXPIRY DATE</Text>
                    <View style={styles.expiredDateContainer}>
                        <Text style={styles.expredDateText1}>{(this.props.user.creditcards[this.state.cardindex].expired_m < 10? "0" + this.props.user.creditcards[this.state.cardindex].expired_m: this.props.user.creditcards[this.state.cardindex].expired_m)} / {this.props.user.creditcards[this.state.cardindex].expired_y}</Text>
                    </View>
                </Content>:null}
                <Footer style={styles.footer}>
                    <Grid>
                        <Col>
                            <Button block style={styles.deleteBtn} onPress={() => this.onDelete()}>
                                <Text style={styles.deleteBtnText}>Delete</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button block style={styles.editBtn} onPress={() => this.onEdit()}>
                                <Text style={styles.editBtnText}>Edit</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Footer>
                {this.state.isLoading?<PLoading color="black"/>: null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(CreditDetailScreen);