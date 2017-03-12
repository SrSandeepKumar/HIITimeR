import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Actions = () => {
  return (
    <View style={styles.actionsContainer}>
      <Text style={styles.buttons}> START </Text>
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
    backgroundColor: '#c74d24',
    margin: 5,
    textAlign: 'center',
    padding: 15,
    height: 60,
    fontSize: 20,
    color: 'white',
    borderRadius: 3
  }
});

export default Actions;
