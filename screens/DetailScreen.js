import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail',
    headerTintColor: '#FEC208',
    headerStyle: {
      backgroundColor: '#CF240A',
      height: 80
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Detail Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});