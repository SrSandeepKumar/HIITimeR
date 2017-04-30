const workOutLists = [
  {
    title: 'PREPARE',
    subTitle: 'set PREPARE duration',
    source: prepare,
    defaultCount: 10
  },{
    title: 'WORK',
    subTitle: 'set WORK duration',
    source: dumbbell,
    defaultCount: 20
  },{
    title: 'REST',
    subTitle: 'set REST duration',
    source: rest,
    defaultCount: 10
  },{
    title: 'REPETATIONS',
    subTitle: 'set REPETATIONS duration',
    source: repeat,
    defaultCount: 8
  }
];

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import prepare from './img/prepare.png';
import minus from './img/minus.png';
import plus from './img/plus.png';
import dumbbell from './img/dumbbell.png';
import rest from './img/rest.png';
import repeat from './img/repeat.png';

const WorkOuts = ({ duration, increase, decrease, section }) => {
  return(
    <ScrollView style={styles.list}>
      { workOutLists.map((val, index) => {
        const type = section[val.title.toLowerCase()] ? section[val.title.toLowerCase()] : { min: 0, sec: 0 };
        debugger;
        return (
          <View style={styles.listContainer} key={index}>
            <Image style={styles.actionIcon} source={val.source} />
            <View style={styles.actionContainer}>
              <Text style={styles.actionHeading}>{val.title}</Text>
              <View style={styles.actionTimers}>
                <View style={styles.decrementContainer}>
                  <Image style={styles.decrementIcon} source={minus} />
                </View>
                <View style={styles.countContainer}>
                  <Text style={styles.counts}> {val.defaultCount} </Text>
                </View>
                <View style={styles.decrementContainer}>
                  <Image style={styles.decrementIcon} source={plus} />
                </View>
              </View>
            </View>
          </View>);
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column'
  },
  listContainer: {
    height: 80,
    borderColor: 'white',
    flexDirection: 'row',
    marginBottom: 15
  },
  decrementContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  decrementIcon: {
    textAlign: 'center',
    width: 40,
    height: 40
  },
  countContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counts: {
    justifyContent: 'center',
    fontSize: 25
  },
  actionIcon: {
    width: 50,
    height: 50,
    margin: 15
  },
  actionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch'
  },
  actionHeading: {
    flex: 0.5,
    fontSize: 20,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  actionTimers: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  listItemContainer: {
    padding: 10,
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
  },
  gridList: {
    flex: 1
  },
  listItemContainerGrid1: {
    flex: 0.3,
    backgroundColor: 'green',
    padding: 20
  },
  listItemContainerGrid2: {
    flex: 0.3,
    height: 300,
    backgroundColor: 'red',
    padding: 10,
    margin: 5

  }
});

export default WorkOuts;
