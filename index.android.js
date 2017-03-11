/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import WorkOuts from './src/forms';
import Actions from './src/actions';
import bgImage from './src/img/bgImage.jpg';

export default class HIITimeR extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalDuration: 0,
      workOutDuration: {},
      color: 'red'
    };
  }

  increaseTimer = (which) => {
    const type = this.state.workOutDuration;
    let typeEntity = type[which.toLowerCase()];
    if (typeof typeEntity !== 'undefined') {
      if (typeEntity['sec'] + 1 > 60) {
        typeEntity['min'] = typeEntity['min'] + 1;
        typeEntity['sec'] = 0;
      } else {
        typeEntity['sec'] = typeEntity['sec'] + 1;
      }
    } else {
      const setType = type[which.toLowerCase()] = {};
      setType.min = 0;
      setType.sec = 1;
    }
    console.log(type);
    this.setState({ workOutType: type });
  };

  decreaseTimer = (which) => {
    console.log('Clicked decrease timer', which);
  }

  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={bgImage} style={styles.backgroundImage}>
          <View style={styles.container}>
            <Text> Header </Text>
          </View>
          <WorkOuts
            increase={this.increaseTimer}
            decrease={this.decreaseTimer}
            section={this.state.workOutDuration}
            duration={this.state.totalDuration} />
          <Actions />
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  },
  workOutContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent('HIITimeR', () => HIITimeR);
