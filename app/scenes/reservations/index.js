import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Button,
    Title,
    Thumbnail,
    Header,
    Label,
    Left,
    Form,
    Input,
    View,
    Grid,
    Col,
    Text,
    List,
    ListItem,
    Right,
    Icon
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, RefreshControl } from 'react-native';
import { API } from '../../constants/api';
import { getReservation } from '../../actions';
import moment from 'moment';

class ReservationScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0,
            refreshing: false
        }

        this.onRefresh();
    }

    loadReservation(){
        var { token, dispatch } = this.props;
        getReservation(token, 0)
        .then(data => {
            dispatch({type: 'setreservation', data: data});
            this.setState({
                refreshing: false
            });
        })
        .catch(err => {
            this.setState({
                refreshing: false
            });
        });
    }

    onRefresh(){
        this.setState({
            refreshing: true
        });
        this.loadReservation();
    }

    onSelectedTab(index){
        this.setState({selectedTab: index});
    }

    onDetail(reservation){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'ReservationDetail', params: { reservation: reservation }}));
    }

    isActive(reservation){
        var bookingtime = (new Date(reservation.booking_time)).getTime();
        var now = (new Date()).getTime();
        if(bookingtime - now > 0){
            return true;
        }else{
            return false;
        }
    }

    showBookingTime(reservation){
        var bookingtime = new Date(reservation.booking_time);
        return (bookingtime.getUTCHours() - 12 )+":00 PM - " + (bookingtime.getUTCHours() - 11) + ":00 PM";
    }

    render(){
        console.log(this.props.reservationlist);
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>Reservations</Title>
                    </Body>
                </Header>
                <View style={styles.tabContainer}>
                    <Grid>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(0)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 0 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 0) && styles.tabItemActiveBtnText]}>ACTIVE</Text>
                            </Button>
                        </Col>
                        <Col>
                            <Button onPress={() => this.onSelectedTab(1)} block transparent style={[styles.tabItemBtn,( this.state.selectedTab == 1 ) && styles.tabItemActiveBtn]}>
                                <Text style={[styles.tabItemBtnText, (this.state.selectedTab == 1) && styles.tabItemActiveBtnText]}>HISTORY</Text>
                            </Button>
                        </Col>
                    </Grid>
                </View>
                <Content 
                    style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}/>
                    }>
                    {this.state.selectedTab == 0?
                    <List>
                        {this.props.reservationlist.map((reservation, index) => {
                            if(this.isActive(reservation)){
                                return (
                                    <ListItem style={styles.listItem} onPress={() => this.onDetail(reservation)} key={index}>
                                        <Thumbnail square source={{uri: API.SERVER + reservation.feed_id.image}} style={styles.listItemImage}/>
                                        <Body>
                                            <Text style={styles.listItemTitleText}>{reservation.feed_id.heading}</Text>
                                            <Text style={styles.listItemDateText}>{moment(reservation.booking_time).format('D MMMM, YYYY')}</Text>
                                            <Text style={styles.listItemTimeText}>{this.showBookingTime(reservation)}</Text>
                                        </Body>
                                        <Right>
                                            <Icon style={styles.listItemRightIcon} name="arrow-forward"/>
                                        </Right>
                                    </ListItem>
                                );
                            }else{
                                return null;
                            }
                        })}                                                
                    </List>:
                    <List>
                        {this.props.reservationlist.map((reservation, index) => {
                            if(!this.isActive(reservation)){
                                return (
                                    <ListItem style={styles.listItem}>
                                        <Thumbnail square source={require('../../assets/home/1.png')} style={styles.listItemImage}/>
                                        <Body>
                                            <Text style={styles.listItemTitleText}>Bowling</Text>
                                            <Text style={styles.listItemLocationText}>Boronia St & Anzac Parade, NSW 2033</Text>
                                            <Text style={styles.listItemReceivedTimeText}>Received:   {moment(reservation.booking_time).format('D/MM/YYYY')} {this.showBookingTime(reservation)}</Text>
                                            <Text style={styles.listItemReceivedTimeText}>Total: <Text style={styles.listItemPriceText}> ${reservation.purchase_amount.toFixed(2)}</Text></Text>
                                        </Body>
                                    </ListItem>
                                );
                            }else{
                                return null;
                            }
                        })}                                               
                    </List>
                    }
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    reservationlist: state.reservation.list
});

export default connect(mapStateToProps)(ReservationScreen);