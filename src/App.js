import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import data from '../assets/data.json';

import Header from './Components/Header';
import Filters from './Components/Filters';

export default class App extends Component {
  state = {
    filter: ''
  }

  render() {
    console.log(data.filters)
    return (
      <View styles={styles.container}>
        <Header />
        <View style={{borderBottomWidth: 1, borderColor: '#fff', marginHorizontal: 10}}>
        </View>
        <Filters filtersProps={data.filters} />
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F38F4',
  },
});
