import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import data from '../assets/data.json';

import Header from './Components/Header';
import Filters from './Components/Filters';
import Exercises from './Components/Exercises';

export default class App extends Component {

  render() {
    return (
      <View styles={styles.container}>
        <Header />
        <View style={{borderBottomWidth: 1, borderColor: '#fff', marginHorizontal: 10}}>
        </View>
        <Filters filtersProps={data.filters} />
        <Exercises exercicesProps={data.exercices} />
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
