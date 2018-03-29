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
    Right,
    View,
    List,
    ListItem,
    Grid,
    Col,
    Icon,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import MapView from 'react-native-maps';
import styles from './styles';
import { StatusBar } from 'react-native';
import { API } from '../../constants/api';
import { savedFeed, unSavedFeed, getSavedList } from '../../actions';
import moment from 'moment';
import PLoading from '../../components/loading';

class DetailScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            feed: this.props.navigation.state.params.feed,
            isLoading: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSchedule(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'ScheduleView', params: {feed: this.state.feed}}));
    }

    onReserve(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Payment', params: {feed: this.state.feed, hours: [true, false, false, false], date: new Date()}}));
    }

    onShare(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Share'}));
    }

    onSave(){
        this.setState({
            isLoading: true
        });

        var { token, dispatch } = this.props;
        if(this.state.feed.isSaved == null){
            savedFeed(token, this.state.feed._id)
            .then(data => {
                this.state.feed.isSaved = data.id;
                //refresh store
                var feedlist = this.props.feedlist;
                for(var i = 0; i < feedlist.length; i++){
                    if(feedlist[i]._id == this.state.feed._id){
                        feedlist[i].isSaved = data.id
                    }
                };
                dispatch({type: 'setfeed', data: []});
                dispatch({type: 'setfeed', data: feedlist});

                this.setState({
                    isLoading: false
                });

                //refresh saved list to store
                getSavedList(token)
                .then(savedlist => {
                    dispatch({type: 'setsaved', data: savedlist});
                })
                .catch(err => {

                });
            })
            .catch(err => {
                this.setState({
                    isLoading: false
                });
            });
        }else{
            unSavedFeed(token, this.state.feed.isSaved)
            .then(data => {
                this.state.feed.isSaved = null;
                //refresh store
                var feedlist = this.props.feedlist;
                for(var i = 0; i < feedlist.length; i++){
                    if(feedlist[i]._id == this.state.feed._id){
                        feedlist[i].isSaved = null
                    }
                };
                dispatch({type: 'setfeed', data: []});
                dispatch({type: 'setfeed', data: feedlist});
                this.setState({
                    isLoading: false
                });

                //refresh saved list to store
                getSavedList(token)
                .then(savedList => {
                    dispatch({type: 'setsaved', data: savedList});
                })
                .catch(err => {

                });
            })
            .catch(err => {
                this.setState({
                    isLoading: false
                });
            });
        }
    }

    showEstimate(date){
        return  'Ends ' + moment(date).endOf('hour').fromNow();
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                <Button style={styles.saveBtn} onPress={() => this.onSave()}>
                    {this.state.feed.isSaved?
                    <Thumbnail square source={require('../../assets/saved/icFavoriteActive.png')} style={styles.saveBtnIcon}/>:
                    <Thumbnail square source={require('../../assets/home/icFavoriteBlackNormal.png')} style={styles.saveBtnIcon}/>
                    }
                </Button>
                <Button style={styles.shareBtn} onPress={() => this.onShare()}>
                    <Thumbnail square source={require('../../assets/home/icNavShare.png')} style={styles.shareBtnIcon}/>
                </Button>
                <Thumbnail square source={{uri: API.SERVER + this.state.feed.image}} style={styles.image}>
                    <View style={styles.disccountContainer}>
                        <Text style={styles.disccountPercent}>{this.state.feed.discount_percentage}%</Text>
                        <Text style={styles.disccountText}>OFF</Text>
                    </View>
                </Thumbnail>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Thumbnail square source={require('../../assets/icNavBackBlack.png')} style={styles.backBtnIcon}/>
                        </Button>
                    </Left>
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.title}>{this.state.feed.heading}</Text>
                    <Text style={styles.estimateTimeText}>{this.showEstimate(this.state.feed.expired_date)}</Text>
                    <List style={styles.list}>
                        <ListItem style={styles.listItem}>
                            <Grid>
                                <Col>
                                    <Text style={styles.originPrice}>${this.state.feed.original_cost.toFixed(2)}</Text>
                                </Col>
                                <Col>
                                    <Text style={styles.currentPrice}>${this.state.feed.discounted_cost.toFixed(2)}</Text>
                                </Col>
                            </Grid>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                            <Text style={styles.aboutText}>About</Text>
                            <Text style={styles.aboutDescText}>
                                {this.state.feed.description}
                            </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.btnText}>Reviews</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem} onPress={() => this.onSchedule()}>
                            <Body>
                                <Text style={styles.btnText}>View Schedule</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.btnText}>Company Website</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Body>
                                <Text style={styles.locationText}>
                                    <Icon name="md-pin" style={styles.pinIcon}/>   Boronia St & Anzac Parade, NSW 2033
                                </Text>
                            </Body>
                        </ListItem>
                    </List>
                    <MapView
                        style={styles.mapview}
                        scrollEnabled={false}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0025,
                                longitudeDelta: 0.00121
                            }}>
                        <MapView.Circle
                            center={{
                                latitude: 37.78825,
                                longitude: -122.4324
                            }}
                            radius={34}
                            strokeWidth={1}
                            strokeColor="rgb(230,54,166)"
                            fillColor="rgba(230,54,166,0.24)"
                        />
                    </MapView>
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.reserveBtn} onPress={() => this.onReserve()}>
                        <Text style={styles.reserveBtnText}>Book Reservation</Text>
                    </Button>
                </Footer>
                {this.state.isLoading?<PLoading color="white"/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    token: state.user.token,
    feedlist: state.feed.list
});

export default connect(mapStateToProps)(DetailScreen);
