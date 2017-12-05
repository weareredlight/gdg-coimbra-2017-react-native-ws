import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import Item from '../components/Item';

const { width, height } = Dimensions.get('window');

renderItem = ({ item }) => (
  <Item uri={item} width={width} height={300} />
);

export default class Saved extends React.Component {
  render() {
    const { onPress, saved } = this.props.screenProps.Saved; 

    return (
      <View style={[StyleSheet.absoluteFill, container]}>
        <FlatList
          data={saved}
          renderItem={renderItem}
          keyExtractor={a => a}
        />
      </View>
    );
  }
}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
};
