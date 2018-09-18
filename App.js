import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}/>
        <View style={styles.yellowView}>
          <View style={styles.redViewSmall}/>
          <View style={styles.blueViewSmall}/>
        </View>
        <View style={styles.blueView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  redView: {
    flex: 1,
    backgroundColor: 'red',
  },
  yellowView: {
    flex: 7,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueView: {
    flex: 1,
    backgroundColor: 'blue',
  },
  redViewSmall: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueViewSmall: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  }
});
