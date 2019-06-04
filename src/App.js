import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Components/Header/index.js';

export default class App extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Header />
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
