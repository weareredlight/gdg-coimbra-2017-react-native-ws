import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import Item from '../components/Item';

const { width, height } = Dimensions.get('window');

export default class Search extends React.Component {
  componentWillMount() {
    this.props.screenProps.Search.search();
  }

  renderItem = ({ item }) => (
    <Item
      uri={item}
      width={width}
      height={100}
      onPress={() => this.props.screenProps.Search.onPress(item)}
    />
  );

  render() {
    const {
      query,
      updateQuery,
      search,
      searchResults,
    } = this.props.screenProps.Search;

    return (
      <View style={[StyleSheet.absoluteFill, container]}>
        <TextInput
          value={query}
          onChangeText={updateQuery}
          placeholder="Search"
          onSubmitEditing={search}
        />
        <FlatList
          data={searchResults}
          renderItem={this.renderItem}
          keyExtractor={a => a}
        />
      </View>
    );
  }
}

const container = {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 80,
};
