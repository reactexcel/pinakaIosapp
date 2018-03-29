import React, { Component } from 'react';
import {
    DatePickerIOS,
    View,
    Text
} from 'react-native';
import { Button } from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';

class PDatePicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            date: this.props.date
        };
    }

    onDateChange(date){
        this.setState({
            date: (new Date(date))
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.controlContainer}>
                    <Button transparent onPress={this.props.onCancel}>
                        <Text style={styles.cancelBtnText}>Cancel</Text>
                    </Button>
                    <Button transparent onPress={() => this.props.onDone(this.state.date)}>
                        <Text style={styles.doneBtnText}>Done</Text>
                    </Button>
                </View>
                <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    style={styles.datePickerContainer}
                    onDateChange={(date) => this.onDateChange(date)}
                />
        </View>
        
        );
    }
}

export default connect()(PDatePicker);