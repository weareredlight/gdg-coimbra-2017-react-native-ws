import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Saved extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, container]}>
        <Text>Saved Screen</Text>
      </View>
    );
  }
}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
};
