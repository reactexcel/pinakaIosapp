import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Content,
    Footer,
    Button,
    Thumbnail,
    Text,
    View,
    Grid,
    Col
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';

import HomeScreen from '../home/';
import SavedScreen from '../saved/';
import ReservationScreen from '../reservations/';
import ProfileScreen from '../profile/';
import SettingScreen from '../settings/';

class TabScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            selectedTab: 0
        };
    }

    onSelectedTab(index){
        this.setState({
            selectedTab: index
        });
    }

    render(){
        StatusBar.setBarStyle('light-content');
        return (
            <Container style={styles.container}>
                {this.state.selectedTab == 0?
                <HomeScreen/>: null}
                {this.state.selectedTab == 1?
                <SavedScreen/>: null}
                {this.state.selectedTab == 2?
                <ReservationScreen/>: null}
                {this.state.selectedTab == 3?
                <ProfileScreen/>: null}
                {this.state.selectedTab == 4?
                <SettingScreen/>:null}
                <Footer>
                    <Grid>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectedTab(0)}>
                                    <View style={styles.tabBtnWrapper}>
                                        {this.state.selectedTab == 0?                                        
                                        <Thumbnail square source={require('../../assets/tab/icTabHomeSelected.png')} style={styles.tabBtnIcon}/>:
                                        <Thumbnail square source={require('../../assets/tab/icTabHomeNormal.png')} style={styles.tabBtnIcon}/>
                                        }
                                        {this.state.selectedTab == 0?
                                        <Text style={styles.tabBtnActiveText}>Home</Text>:
                                        <Text style={styles.tabBtnText}>Home</Text>
                                        }
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectedTab(1)}>
                                    <View style={styles.tabBtnWrapper}>
                                        {this.state.selectedTab == 1?
                                        <Thumbnail square source={require('../../assets/tab/icTabSavedSelected.png')} style={styles.tabBtnIcon}/>:
                                        <Thumbnail square source={require('../../assets/tab/icTabSavedNormal.png')} style={styles.tabBtnIcon}/>                                        
                                        }
                                        {this.state.selectedTab == 1?
                                        <Text style={styles.tabBtnActiveText}>Saved</Text>:
                                        <Text style={styles.tabBtnText}>Saved</Text>
                                        }
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemBtn}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectedTab(2)}>
                                    <View style={styles.tabBtnWrapper}>
                                        {this.state.selectedTab == 2?
                                        <Thumbnail square source={require('../../assets/tab/icTabReservationsSelected.png')} style={styles.tabBtnIcon}/>:
                                        <Thumbnail square source={require('../../assets/tab/icTabReservationsNormal.png')} style={styles.tabBtnIcon}/>                                        
                                        }
                                        {this.state.selectedTab == 2?
                                        <Text style={styles.tabBtnActiveText}>Reservations</Text>:
                                        <Text style={styles.tabBtnText}>Reservations</Text>
                                        }
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectedTab(3)}>
                                    <View style={styles.tabBtnWrapper}>
                                        {this.state.selectedTab == 3?
                                        <Thumbnail square source={require('../../assets/tab/icTabProfileSelected.png')} style={styles.tabBtnIcon}/>:
                                        <Thumbnail square source={require('../../assets/tab/icTabProfileNormal.png')} style={styles.tabBtnIcon}/>                                        
                                        }
                                        {this.state.selectedTab == 3?
                                        <Text style={styles.tabBtnActiveText}>Profile</Text>:
                                        <Text style={styles.tabBtnText}>Profile</Text>
                                        }
                                    </View>
                                </Button>
                            </View>
                        </Col>
                        <Col style={styles.tabItem}>
                            <View style={styles.tabItemContainer}>
                                <Button transparent style={styles.tabItemBtn} onPress={() => this.onSelectedTab(4)}>
                                    <View style={styles.tabBtnWrapper}>
                                        {this.state.selectedTab == 4?
                                        <Thumbnail square source={require('../../assets/tab/icTabSettingsSelected.png')} style={styles.tabBtnIcon}/>:
                                        <Thumbnail square source={require('../../assets/tab/icTabSettingsNormal.png')} style={styles.tabBtnIcon}/>                                        
                                        }
                                        {this.state.selectedTab == 4?
                                        <Text style={styles.tabBtnActiveText}>Settings</Text>:
                                        <Text style={styles.tabBtnText}>Settings</Text>
                                        }
                                    </View>
                                </Button>
                            </View>
                        </Col>
                    </Grid>                    
                </Footer>
            </Container>
        );
    }
}


export default connect()(TabScreen);