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
    Icon,
    Grid,
    Col,
    Text,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar, RefreshControl } from 'react-native';
import { API } from '../../constants/api';
import { getSavedList, unSavedFeed } from '../../actions';
import moment from 'moment';

class SavedScreen extends Component{
    static navigationOptions = {
        header:  null
    };

    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        }

        this.onRefresh();
    }

    loadSaved(){
        var { token, dispatch } = this.props;
        getSavedList(token)
        .then(data => {
            dispatch({type: 'setsaved', data: data});  
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

        this.loadSaved();
    }

    onDetail(saved){
        var feedObj = JSON.parse(JSON.stringify(saved.feed_id));
        feedObj['isSaved'] = saved._id;
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Detail', params: { feed: feedObj }}));
    }

    showEstimate(date){
        return  'Ends ' + moment(date).endOf('hour').fromNow();
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.headerTitle}>Saved</Title>
                    </Body>
                </Header>
                <Content 
                    style={styles.content}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}/>
                    }>
                    <List>
                        {this.props.savedlist.map((saved, index)=> {
                            return (
                                <ListItem style={styles.listItem} onPress={() => this.onDetail(saved)} key={index}>
                                    <Body>
                                        <Thumbnail square source={{uri: API.SERVER + saved.feed_id.image}} style={styles.itemImage}>
                                            <View style={styles.disccountContainer}>
                                                <Text style={styles.disccountPercent}>{saved.feed_id.discount_percentage}%</Text>
                                                <Text style={styles.disccountText}>OFF</Text>
                                            </View>
                                            <Button transparent style={styles.saveBtn}>
                                                <Thumbnail style={styles.saveBtnIcon} square source={require('../../assets/saved/icFavoriteActive.png')}/>
                                            </Button>
                                        </Thumbnail>
                                        <View style={styles.itemPriceContainer}>
                                            <Text style={styles.itemPriceText1}>{saved.feed_id.heading}</Text>
                                            <Text style={styles.itemPriceText1}>
                                                <Text style={styles.itemDiscount}>
                                                    ${saved.feed_id.original_cost}
                                                </Text>  ${saved.feed_id.discounted_cost}                                       
                                            </Text>
                                        </View>
                                        <Text style={styles.itemEstimatedTime}>{this.showEstimate(saved.feed_id.expired_date)}</Text>
                                    </Body>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    token: state.user.token,
    savedlist: state.saved.list
});

export default connect(mapStateToProps)(SavedScreen);