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
    Title
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

class PaymentMethodScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAddCredit(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'AddCredit', params: {action: 'add'}}));
    }

    onCreditDetail(card){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'CreditDetail', params: { id: card._id }}));
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
                        <Title style={styles.headerTitle}>Payment Method</Title>
                    </Body>
                    <Right style={styles.IconContainer}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.paymentText}>Payment Method</Text>
                    <List style={styles.list}>
                      {this.props.user.creditcards && this.props.user.creditcards[0] != undefined ?
                        this.props.user.creditcards.map((card, index) => {
                            return (
                                <ListItem style={styles.listItem} onPress={() => this.onCreditDetail(card)} key={index}>
                                    <Body style={styles.paymentListItemBody}>
                                        <Thumbnail square source={require('../../assets/payment/mastercard.png')} style={styles.paymentIcon}/>
                                        <Text>&middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {this.showNumber(card.number)}</Text>
                                    </Body>
                                </ListItem>
                            );
                        })
                        :
                        null
                      }
                        <ListItem style={styles.listItem} onPress={() => this.onAddCredit()}>
                            <Body style={styles.paymentListItemBody}>
                                <Icon name="add-circle" style={styles.addPaymentIcon}/>
                                <Text style={styles.addPaymentText}>Add credit card</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(PaymentMethodScreen);
