import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import data from '../assets/data.json';

import Header from './Components/Header';
import Filters from './Components/Filters';
import Exercises from './Components/Exercises';

export default class App extends Component {
  state = {
    selectedFilter: [],
    imagesFilters: [
      require('../assets/img/ic_yoga.png'),
      require('../assets/img/ic_upper_body.png'),
      require('../assets/img/ic_lower_body.png'),
      require('../assets/img/ic_dance.png'),
      require('../assets/img/ic_yoga.png'),
    ],
    imagesExercices: [
      require('../assets/img/running.png'),
      require('../assets/img/cycling.png'),
      require('../assets/img/gym.png'),
      require('../assets/img/yoga.png'),
    ]

  }

  onChangeSelectedButton = (filter) => {
    let state = this.state.selectedFilter,
        index = state.indexOf(filter);
    if(index > -1) {
      state.splice(index,1);
    } else {
      state.push(filter);
    }
    
    this.setState({ selectedFilter: state});
  }
  render() {
    return (
      <View styles={styles.container}>
        <Header />
        <Filters 
          filtersProps={data.filters}
          imagesProps={this.state.imagesFilters}
          changeSelected={(index) => this.onChangeSelectedButton(index)}
          selectedFilter={this.state.selectedFilter}
        />
        <Exercises exercicesProps={data.exercices} imagesProps={this.state.imagesExercices} />
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
