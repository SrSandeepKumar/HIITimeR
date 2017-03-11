const workOutLists = [
  {
    title: 'PREPARE',
    subTitle: 'set PREPARE duration'
  },{
    title: 'WORK',
    subTitle: 'set WORK duration'
  },{
    title: 'REST',
    subTitle: 'set REST duration'
  },{
    title: 'REPETATIONS',
    subTitle: 'set REPETATIONS duration'
  }
];

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WorkOuts = ({ duration, increase, decrease, section }) => {
  return(
    <View style={styles.list}>
      { workOutLists.map((val, index) => {
          const type = section[val.title.toLowerCase()] ? section[val.title.toLowerCase()] : { min: 0, sec: 0 };
          return (
            <View key={index} style={styles.listItemContainer}>
              <Text style={styles.listItem}> {val.title} </Text>
              <Text style={styles.counterContainer}>
                <Text style={styles.counter} onPress={(e) => decrease(val.title)}> - </Text>
                <Text style={styles.counter}> {type.sec} </Text>
                <Text style={styles.counter} onPress={(e) => increase(val.title)}> + </Text>
              </Text>
            </View>
          );
        })
      }
      <Text> TOTAL DURATION : { duration } </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column'
  },
  listItemContainer: {
    backgroundColor: '#2aa198',
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    flexDirection: 'row'
  },
  listItem: {
    flex: 1,
    color: 'white',
  },
  counter: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
});

export default WorkOuts;
