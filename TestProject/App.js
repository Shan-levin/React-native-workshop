import React from 'react';
import {View, Text, Button, StyleSheet, Alert, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    fontSize: 30,
    marginLeft: 20,
  },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    // all are dispplay in here
    return (
      <View>
        <Text style={style.header}>To Do App</Text>
        <View style={{alignItems: 'bottom'}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              position: 'absolute',
              bottom: 10,
              right: 10,
              height: 70,
              backgroundColor: '#fff',
              borderRadius: 100,
            }}>
            <Text style={{fontSize: 40, color: 'green'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
