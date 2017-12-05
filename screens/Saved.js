import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import Item from '../components/Item';

const { width, height } = Dimensions.get('window');

export default class Saved extends React.Component {
  renderItem = ({ item }) => (
    <Item
      uri={item}
      width={width}
      height={300}
      onPress={() => this.props.screenProps.Saved.onPress(item)}
    />
  );

  render() {
    const { onPress, saved } = this.props.screenProps.Saved;

    return (
      <View style={[StyleSheet.absoluteFill, container]}>
        <FlatList data={saved} renderItem={this.renderItem} keyExtractor={a => a} />
      </View>
    );
  }
}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
};
