import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Text,
    Button,
    Header,
    Thumbnail,
    Left,
    View,
    Footer,

} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { StatusBar } from 'react-native';
import { getInterests } from '../../actions';
import { API } from '../../constants/api';

class InterestScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            interest: [],
            userInterest: [0,0,0,0,0,0,0,0,0,0]
        };

        getInterests()
        .then(interests => {
            this.setState({
                interest: interests
            });
        })
        .catch(err => {
            alert("Please check  wifi or internet.");
        });
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onClick(index){
        if(this.state.userInterest[index] < 2){
            this.state.userInterest[index]++;
            this.setState({userInterest: this.state.userInterest});
        }
    }

    onNext(){
        var retInterest = '';
        for(var i = 0; i < this.state.userInterest.length; i++){
            if(this.state.userInterest[i] != 0){
                retInterest +=this.state.interest[i]._id+","+this.state.userInterest[i]+":";
            }
        }
        if(retInterest.length > 0){
            retInterest = retInterest.substring(0,retInterest.length -1);
        }

        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'Login', params: {type: 'signup', interest: retInterest}}));
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
                </Header>
                <Content style={styles.content}>
                    <Text style={styles.loginText}>Tap your interests!</Text>
                    <Text style={styles.descText}>1 tap - you like it, 2 taps - you like it very much</Text>
                    {this.state.interest.length > 0?
                    <View style={styles.ballContainer}>
                        <Button  onPress={() => this.onClick(0)} style={[styles.ballBtn, styles.ball1, (this.state.userInterest[0] == 1) && styles.ball1tapBtn, (this.state.userInterest[0] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[0] == 1) && styles.ball1tapBtnText, (this.state.userInterest[0] == 2) && styles.ball2tapBtnText]}>{this.state.interest[0].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(1)} style={[styles.ballBtn, styles.ball2, (this.state.userInterest[1] == 1) && styles.ball1tapBtn, (this.state.userInterest[1] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[1] == 1) && styles.ball1tapBtnText, (this.state.userInterest[1] == 2) && styles.ball2tapBtnText]}>{this.state.interest[1].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(2)} style={[styles.ballBtn, styles.ball3,(this.state.userInterest[2] == 1) && styles.ball1tapBtn, (this.state.userInterest[2] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[2] == 1) && styles.ball1tapBtnText, (this.state.userInterest[2] == 2) && styles.ball2tapBtnText]}>{this.state.interest[2].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(3)} style={[styles.ballBtn, styles.ball4, (this.state.userInterest[3] == 1) && styles.ball1tapBtn, (this.state.userInterest[3] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[3] == 1) && styles.ball1tapBtnText, (this.state.userInterest[3] == 2) && styles.ball2tapBtnText]}>{this.state.interest[3].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(4)} style={[styles.ballBtn, styles.ball5, (this.state.userInterest[4] == 1) && styles.ball1tapBtn, (this.state.userInterest[4] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[4] == 1) && styles.ball1tapBtnText, (this.state.userInterest[4] == 2) && styles.ball2tapBtnText]}>{this.state.interest[4].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(5)} style={[styles.ballBtn, styles.ball6, (this.state.userInterest[5] == 1) && styles.ball1tapBtn, (this.state.userInterest[5] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[5] == 1) && styles.ball1tapBtnText, (this.state.userInterest[5] == 2) && styles.ball2tapBtnText]}>{this.state.interest[5].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(6)} style={[styles.ballBtn, styles.ball7, (this.state.userInterest[6] == 1) && styles.ball1tapBtn, (this.state.userInterest[6] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[6] == 1) && styles.ball1tapBtnText, (this.state.userInterest[6] == 2) && styles.ball2tapBtnText]}>{this.state.interest[6].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(7)} style={[styles.ballBtn, styles.ball8, (this.state.userInterest[7] == 1) && styles.ball1tapBtn, (this.state.userInterest[7] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[7] == 1) && styles.ball1tapBtnText, (this.state.userInterest[7] == 2) && styles.ball2tapBtnText]}>{this.state.interest[7].name}</Text>
                        </Button>
                        <Button onPress={() => this.onClick(8)} style={[styles.ballBtn, styles.ball9, (this.state.userInterest[8] == 1) && styles.ball1tapBtn, (this.state.userInterest[8] == 2) && styles.ball2tapBtn]}>
                            <Text style={[styles.ballBtnText, (this.state.userInterest[8] == 1) && styles.ball1tapBtnText, (this.state.userInterest[8] == 2) && styles.ball2tapBtnText]}>{this.state.interest[8].name}</Text>
                        </Button>
                    </View>: null}
                </Content>
                <Footer style={styles.footer}>
                    <Button block style={styles.nextBtn} onPress={() => this.onNext()}>
                        <Text style={styles.nextBtnText}>Next</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default connect()(InterestScreen);
