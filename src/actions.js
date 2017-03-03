import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Actions = () => {
  return (
    <View style={styles.actionsContainer}>
      <Text style={styles.buttons}> START </Text>
      <Text style={styles.buttons}> STOP </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    margin: 5,
    textAlign: 'center',
    padding: 15,
    height: 50,
    fontWeight: '500',
    color: 'white'
  }
});

export default Actions;
