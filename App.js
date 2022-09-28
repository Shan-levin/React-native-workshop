import React from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    fontSize: 30,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount(){
    Alert.alert("Hello", "Welcome");
  }

  increase = () => {
    this.setState({counter: this.state.counter + 1});
  };

  decrease = () => {
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    // all are dispplay in here
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={style.header}>COUNTER</Text>
        <Text style={style.header}>{this.state.counter}</Text>
        <View style={style.header}>
          <Button title="Increase" onPress={this.increase}></Button>
        </View>
        <View style={style.header}>
          <Button title="Decrease" onPress={this.decrease}></Button>
        </View>
      </View>
    );
  }
}
